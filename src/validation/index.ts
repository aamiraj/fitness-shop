import { z, ZodType } from "zod";
import { LogInFormData, RegisterFormData } from "../types";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
// const passwordValidation = new RegExp(
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// );

// phone validation (Bangladesh)
// const phoneValidation = new RegExp(
//   /^(?:(?:\+|88)|(01))?(\d{13})/
// );

export const registerFormSchema: ZodType<RegisterFormData> = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Must be at least 3 characters." })
      .max(30, { message: "Must be at most 30 characters." }),
    email: z.string().email({ message: "Please put a valid email." }),
    password: z
      .string()
      .min(8, { message: "Must be at least 8 characters." })
      .max(20, { message: "Must be at most 20 characters." }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Password did not match.",
    path: ["confirmPassword"],
  });

export const loginFormSchema: ZodType<LogInFormData> = z.object({
  email: z.string().email({ message: "Please put a valid email." }),
  password: z.string(),
});
