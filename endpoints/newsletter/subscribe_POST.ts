import { schema, OutputType } from "./subscribe_POST.schema";
import { db } from '../../helpers/db';
import { triggerSendpulseEvent } from '../../helpers/sendpulse';
import superjson from 'superjson';
import { ZodError } from "zod";

export async function handle(request: Request): Promise<Response> {
  try {
    if (request.method !== 'POST') {
      return new Response(superjson.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const json = superjson.parse(await request.text());
    const validatedInput = schema.parse(json);

    const result = await db.
    insertInto('newsletterSubscriptions').
    values({
      email: validatedInput.email,
      language: validatedInput.language
    }).
    onConflict((oc) => oc.column('email').doNothing()).
    executeTakeFirst();

    await triggerSendpulseEvent({
      email: validatedInput.email,
      language: validatedInput.language,
      form_type: "newsletter"
    });

    // The insert operation was successful, but no row was inserted because the email already exists.
    if (result.numInsertedOrUpdatedRows === 0n) {
      return new Response(superjson.stringify({
        success: true,
        message: 'This email is already subscribed.'
      } satisfies OutputType), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(superjson.stringify({
      success: true,
      message: 'Successfully subscribed!'
    } satisfies OutputType), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error in newsletter subscription:", error);
    if (error instanceof ZodError) {
      return new Response(superjson.stringify({ error: "Invalid input", details: error.errors }), { status: 400 });
    }
    if (error instanceof Error) {
      return new Response(superjson.stringify({ error: "An unexpected error occurred.", details: error.message }), { status: 500 });
    }
    return new Response(superjson.stringify({ error: "An unexpected error occurred." }), { status: 500 });
  }
}