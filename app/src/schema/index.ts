import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().min(8, "Mínimo de 8 caracteres"),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome muito curto" })
    .max(50, { message: "Nome muito longo" }),
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().min(8, "Mínimo de 8 caracteres"),
});
