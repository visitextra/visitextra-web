import { schema, OutputType } from "./register_POST.schema";
import { db } from "../../helpers/db";
import { triggerSendpulseEvent } from "../../helpers/sendpulse";
import superjson from 'superjson';
import { ZodError } from "zod";

export async function handle(request: Request) {
  try {
    const json = superjson.parse(await request.text());
    const validatedData = schema.parse(json);

    const result = await db
      .insertInto('driverRegistrations')
      .values({
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        language: validatedData.language,
        city: validatedData.city,
        experience: validatedData.experience,
        vehicleType: validatedData.vehicleType,
        message: validatedData.message,
      })
      .returning('id')
      .executeTakeFirstOrThrow();

    await triggerSendpulseEvent({
      email: validatedData.email,
      phone: validatedData.phone,
      name: validatedData.fullName,
      city: validatedData.city,
      vehicle_type: validatedData.vehicleType,
      experience: validatedData.experience,
      message: validatedData.message || "",
      language: validatedData.language,
      form_type: "driver"
    });

    return new Response(superjson.stringify({ success: true, id: result.id } satisfies OutputType), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Driver registration failed:", error);

    if (error instanceof ZodError) {
      return new Response(superjson.stringify({ error: "Invalid input data", details: error.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    if (error instanceof Error) {
        // Check for unique constraint violation on email
        if ('constraint' in error && (error as any).constraint === 'driver_registrations_email_key') {
             return new Response(superjson.stringify({ error: "This email is already registered." }), {
                status: 409, // Conflict
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }

    return new Response(superjson.stringify({ error: "An internal server error occurred." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}