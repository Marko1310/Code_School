import {z} from 'zod'

export const AddNewWorkshopSchema = z.object({
name: z.string().min(1, 'Please provide a valid title'),
description: z.string().min(1, 'Please provide a valid description'),
difficulty_id: z.number().min(1, 'Please provide a valid difficulty'),
lecturer_ids: z.string().array().min(1, 'Please provide a lecturer '), 
theme_ids: z.string().array().min(1, 'Please provide a theme'), 

})

export type AddNewWorkshopDto = z.infer<typeof AddNewWorkshopSchema>;