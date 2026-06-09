import { schema, OutputType } from "./inquire_POST.schema";
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

    await db.
    insertInto('partnershipInquiries').
    values(validatedInput).
    execute();

    await triggerSendpulseEvent({
      email: validatedInput.email,
      phone: validatedInput.phone || "",
      name: validatedInput.name,
      company_name: validatedInput.companyName || "",
      message: validatedInput.message,
      language: validatedInput.language,
      form_type: "partnership"
    });

    return new Response(superjson.stringify({
      success: true
    } satisfies OutputType), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error in partnership inquiry submission:", error);
    if (error instanceof ZodError) {
      return new Response(superjson.stringify({ error: "Invalid input", details: error.errors }), { status: 400 });
    }
    if (error instanceof Error) {
      return new Response(superjson.stringify({ error: "An unexpected error occurred.", details: error.message }), { status: 500 });
    }
    return new Response(superjson.stringify({ error: "An unexpected error occurred." }), { status: 500 });
  }
}