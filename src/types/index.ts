import { FieldError, UseFormRegister } from "react-hook-form";

export type RegisterFormData = {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type LogInFormData = {
  email: string;
  password: string;
}

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<RegisterFormData | LogInFormData>;
  error: FieldError | undefined;
}

export type ValidFieldNames = keyof RegisterFormData;

export type JwtReturnType = {
  email: string;
  role: string;
  iat: string;
  exp: string;
}