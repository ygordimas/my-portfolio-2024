import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames = 'name' | 'email' | 'message';

export const EmailSchema: ZodType<FormData> = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
});

export type ProjectsProps = {
  id: string;
  title: string;
  images: { src: string; alt: string }[];
  description: string;
  width?: number;
  height?: number;
  tools: string[];
};
