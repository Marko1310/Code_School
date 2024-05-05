import {z} from 'zod'

export const AddNewWorkshopSchema = z.object({
workshop_name: z.string().min(1, 'Please provide a valid title'),
workshop_description: z.string().min(1, 'Please provide a valid description'),
workshop_difficulty_id: z.number().min(1, 'Please provide a valid difficulty'),
lecturer_ids: z.string().array().min(1, 'Please provide a lecturer '), 
theme_ids: z.string().array().min(1, 'Please provide a theme'), 
})
export type AddNewWorkshopDto = z.infer<typeof AddNewWorkshopSchema>;


export const UpdateWorkshopSchema = z.object({
    workshop_description: z.string().min(1, 'Please provide a valid description'),
    workshop_difficulty_id: z.number().min(1, 'Please provide a valid difficulty'),
    lecturer_ids: z.string().array().min(1, 'Please provide a lecturer '), 
    workshop_name: z.string().min(1, 'Please provide a valid title'),
    theme_ids: z.string().array().min(1, 'Please provide a theme'), 
    workshop_id: z.number().min(1),
    })
export type UpdateWorkshopDto = z.infer<typeof UpdateWorkshopSchema>;

export const AddNewLecturerSchema = z.object({
    lecturer_name: z.string().min(1, 'Please provide a valid name'),
    lecturer_bio: z.string().min(1, 'Please provide a valid bio'),
    lecturer_organization_id: z.number().min(1, 'Please provide a valid organization'),
    theme_ids: z.string().array().min(1, 'Please provide a theme'), 
    })
    export type AddNewLecturerDto = z.infer<typeof AddNewLecturerSchema>;
    
    
    export const UpdateLecturerSchema = z.object({
        lecturer_id: z.number().min(1),
        lecturer_name: z.string().min(1, 'Please provide a valid name'),
        lecturer_bio: z.string().min(1, 'Please provide a valid bio'),
        lecturer_organization_id: z.number().min(1, 'Please provide a valid organization'),
        theme_ids: z.string().array().min(1, 'Please provide a theme'), 
        })
    export type UpdateLecturerDto = z.infer<typeof UpdateLecturerSchema>;