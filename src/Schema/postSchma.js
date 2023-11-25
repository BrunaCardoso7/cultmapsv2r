import { z } from "zod"
export const postEventos = z.object({
    nome: z.string().min(3, {message: "Campo precisa de no minimo 3 caracteres"})
})