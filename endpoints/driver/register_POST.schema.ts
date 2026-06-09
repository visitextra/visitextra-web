import { z } from "zod";
import superjson from 'superjson';

export const schema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  language: z.string(),
  city: z.string(),
  experience: z.string(),
  vehicleType: z.string(),
  message: z.string().optional(),
});

export type InputType = z.infer<typeof schema>;

export type OutputType = {
  success: boolean;
  id: string;
};

export const postDriverRegister = async (body: InputType, init?: RequestInit): Promise<OutputType> => {
  const validatedInput = schema.parse(body);
  const result = await fetch(`/_api/driver/register`, {
    method: "POST",
    body: superjson.stringify(validatedInput),
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const text = await result.text();
  if (!result.ok) {
    try {
      const errorObject = superjson.parse<{ error: string, details?: any }>(text);
      throw new Error(errorObject.error || "An unknown error occurred");
    } catch (e) {
      throw new Error("An unknown error occurred during driver registration.");
    }
  }
  
  return superjson.parse<OutputType>(text);
};