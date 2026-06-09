import { z } from "zod";
import superjson from 'superjson';

export const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  language: z.string().min(2, { message: "Language is required" }),
});

export type InputType = z.infer<typeof schema>;

export type OutputType = {
  success: boolean;
  message?: string;
};

export const postNewsletterSubscribe = async (body: InputType, init?: RequestInit): Promise<OutputType> => {
  const validatedInput = schema.parse(body);
  const result = await fetch(`/_api/newsletter/subscribe`, {
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
      throw new Error("An unknown error occurred during subscription.");
    }
  }
  
  return superjson.parse<OutputType>(text);
};