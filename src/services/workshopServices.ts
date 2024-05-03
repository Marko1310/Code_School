import supabaseClient from '../config/supabaseClient';
import { AddNewWorkshopDto } from '../types/forms.type';

const getAllWorkshops = async () => {
    return await supabaseClient.from('workshops').select()
}

const getFilteredWorkshops = async (lecturerId?:string, difficultyId?:number[], themeIds?:number[]) => {
    let query = supabaseClient.from('workshops').select(`id, name, description, themes (id, name), lecturers (id, name), difficulties(id, name)`)

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

const addNewWorkshop = async (formData:AddNewWorkshopDto) => {
    const {name, description, difficulty_id} = formData
    
        const {data, error} = await supabaseClient.rpc ('add_new_workshop', {
            name, description, difficulty_id
        })
        if (error) throw new Error
        return data

}

const deleteWorkshop = async (workshop_id:number) => {
    await supabaseClient.from('workshops').delete().eq("id", workshop_id)
}

export default { getAllWorkshops, getFilteredWorkshops, addNewWorkshop, deleteWorkshop};