"use server";
import { z } from "zod";
import { senderEmail } from "@/lib/email/sender";

const sendEmailSchema = z.object({
  name: z.string().min(1, { message: "Nome is required" }),
  email: z.string().email({ message: "Email invalid" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(5000, { message: "Message is to long" }),
});

type FormType = z.infer<typeof sendEmailSchema>;
type Response = ActionResponse<
  z.typeToFlattenedError<FormType> & {
    serverError?: string;
  }
>;

export const sendEmail = async (
  _: unknown,
  data: FormData
): Promise<Response> => {
  const result = sendEmailSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  });

  if (!result.success) {
    return {
      isSuccess: false,
      errors: result.error.flatten(),
    };
  }

  const values = result.data;

  try {
    await senderEmail({
      from: "abdelrahmanelnobby@gmail.com",
      to: "abdelrahmanelnobby@gmail.com",
      subject: `Portfolio Message from ${values.name}`,
      text: values.message,
      html: `<div><p>From: ${values.name}</p><p>Email: ${values.email}</p><p>Message: ${values.message}</p></div>`,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return {
      isSuccess: false,
      isServerError: true,
      errors: {
        formErrors: [],
        fieldErrors: {},
        serverError: errorMessage
      }
    };
  }

  return {
    isSuccess: true,
  };
};
