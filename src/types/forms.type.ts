import {z} from 'zod'

export const AddWorkshopSchema = z.object({
    workshop_name: z.string().min(1, 'Please provide a valid title'),
    workshop_description: z.string().min(1, 'Please provide a valid description'),
    workshop_difficulty_id: z.number().min(1, 'Please provide a valid difficulty'),
    lecturer_ids: z.string().array().min(1, 'Please provide a lecturer '), 
    theme_ids: z.string().array().min(1, 'Please provide a theme'), 
})
export type AddWorkshopDto = z.infer<typeof AddWorkshopSchema>;

export const UpdateWorkshopSchema = z.object({
    workshop_description: z.string().min(1, 'Please provide a valid description'),
    workshop_difficulty_id: z.number().min(1, 'Please provide a valid difficulty'),
    lecturer_ids: z.string().array().min(1, 'Please provide a lecturer '), 
    workshop_name: z.string().min(1, 'Please provide a valid title'),
    theme_ids: z.string().array().min(1, 'Please provide a theme'), 
    workshop_id: z.number().min(1),
    })
export type UpdateWorkshopDto = z.infer<typeof UpdateWorkshopSchema>;


export const AddUserToWorkshopSchema = z.object({
    workshop_id: z.number().min(1),
    email: z.string().email('Please provide a valid email'),
    name: z.string().min(1, 'Please provide a valid name'),
})
export type AddUserToWorkshopDto = z.infer<typeof AddUserToWorkshopSchema>;


export const AddLecturerSchema = z.object({
    lecturer_name: z.string().min(1, 'Please provide a valid name'),
    lecturer_bio: z.string().min(1, 'Please provide a valid bio'),
    lecturer_organization_id: z.number().min(1, 'Please provide a valid organization'),
    theme_ids: z.string().array().min(1, 'Please provide a theme'), 
    })
    export type AddLecturerDto = z.infer<typeof AddLecturerSchema>;
    
export const UpdateLecturerSchema = z.object({
    lecturer_id: z.number().min(1),
    lecturer_name: z.string().min(1, 'Please provide a valid name'),
    lecturer_bio: z.string().min(1, 'Please provide a valid bio'),
    lecturer_organization_id: z.number().min(1, 'Please provide a valid organization'),
    theme_ids: z.string().array().min(1, 'Please provide a theme'), 
    })
export type UpdateLecturerDto = z.infer<typeof UpdateLecturerSchema>;


export const AddOrganizationchema = z.object({
    organization_name: z.string().min(1, 'Please provide a valid name'),
    organization_address: z.string().min(1, 'Please provide a valid address'),
    })
    export type AddOrganizationDto = z.infer<typeof AddOrganizationchema>;
    
export const UpdateOrganizationSchema = z.object({
    organization_id: z.number().min(1),
    organization_name: z.string().min(1, 'Please provide a valid name'),
    organization_address: z.string().min(1, 'Please provide a valid address'),
    
    })
export type UpdateOrganizationDto = z.infer<typeof UpdateOrganizationSchema>;