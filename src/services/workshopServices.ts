import supabaseClient from '../config/supabaseClient';
import { AddUserToWorkshopDto, AddWorkshopDto, UpdateWorkshopDto } from '../types/forms.type';

const getAllWorkshops = async () => {
    return await supabaseClient.from('workshops').select()
}

const getFilteredWorkshops = async (lecturerId?:string, difficultyId?:number[], themeIds?:number[]) => {
    let query = supabaseClient.from('workshops').select(`id, name, description, attendees, themes (id, name), lecturers (id, name), difficulties(id, name)`)

    if (lecturerId) {
        query = query.eq('lecturers.id', lecturerId).not('lecturers' , 'is' , null)
    }

    if (difficultyId && difficultyId?.length > 0) {
        query = query.in('difficulty_id', difficultyId).not('difficulties', 'is', null)
    }

    if (themeIds && themeIds?.length > 0) {
        query = query.in('themes.id', themeIds).not('themes', 'is', null)
    }

    return await query
}

const addWorkshop = async (formData:AddWorkshopDto) => {
    const {workshop_name, workshop_description, workshop_difficulty_id, theme_ids, lecturer_ids} = formData

        const {data, error} = await supabaseClient.rpc ('add_workshop', {
            workshop_name, workshop_description, workshop_difficulty_id, theme_ids, lecturer_ids
        })
        if (error) throw new Error
        return data
}

const updateWorkshop = async (formData:UpdateWorkshopDto) => {
    const {workshop_id, workshop_name, workshop_description, workshop_difficulty_id, theme_ids, lecturer_ids} = formData
        const {data, error} = await supabaseClient.rpc ('update_workshop', {
            workshop_description, workshop_difficulty_id, lecturer_ids, workshop_name, theme_ids, workshop_id
        })
        if (error) throw new Error
        return data
}

const deleteWorkshop = async (workshop_id:number) => {
    await supabaseClient.from('workshops').delete().eq("id", workshop_id)
}

const addUserToWorkshop = async (formData:AddUserToWorkshopDto) => {
    const {workshop_id, email, name} = formData
        const {data, error} = await supabaseClient.rpc ('add_user_to_workshop', {
            workshop_id, email, name
        })
        if (error) throw new Error
        return data
}

export default { getAllWorkshops, getFilteredWorkshops, addWorkshop, updateWorkshop, deleteWorkshop, addUserToWorkshop};