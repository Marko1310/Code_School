import supabaseClient from '../config/supabaseClient';

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

export default { getAllWorkshops, getFilteredWorkshops};