import {z} from 'zod'

export const AddNewWorkshopSchema = z.object({
name: z.string().min(1, 'Please provide a valid Workshop title'),
description: z.string().min(1, 'Please provide a valid Workshop description'),
difficulty_id: z.number().min(1, 'Please provide a valid Workshop difficulty '),
})

export type AddNewWorkshopDto = z.infer<typeof AddNewWorkshopSchema>;