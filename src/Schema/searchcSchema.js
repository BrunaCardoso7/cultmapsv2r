import { z } from "zod"
export const searchSchema = z.object({
    title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia"})
    .refine((value)=>
        !/^\s*S/.test(value),{
        message: "A pesquisa não pode ter apenas espaços"
    })
})  