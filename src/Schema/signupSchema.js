import { z } from "zod"
export const signupSchema = z.object({
    nome: z.string().min(3, {message: "Campo precisa de no minimo 3 caracteres"}),
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
    password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres"})
    
})