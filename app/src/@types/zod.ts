import z from "zod";
import { loginSchema, registerSchema } from "../schema";

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
