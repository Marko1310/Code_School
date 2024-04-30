import supabaseClient from '../config/supabaseClient';

const getAllThemes = async () => {
  return await supabaseClient.from('themes').select();
};

const getAllDifficulties = async () => {
    return await supabaseClient.from('difficulties').select()
}

const getAllOrganizations = async () => {
    return await supabaseClient.from('organizations').select()
}

const getAllWorkshops = async () => {
    return await supabaseClient.from('workshops').select()
}

const getAllLecturers = async () => {
    return await supabaseClient.from('lecturers').select(`id, name, organizations(name)`)
}

const getFilteredLecturers = async (organizationId?:number[], themeIds?:number[]) => {
    let query = supabaseClient.from('lecturers').select(`id, name, profile_url, bio, themes(id, name), organizations(id, name)`)

    if (organizationId && organizationId?.length > 0) {
        query = query.in('organization_id', organizationId).not('organizations' , 'is' , null)
    }

    if (themeIds && themeIds?.length > 0){
        query = query.in('themes.id', themeIds).not('themes', 'is', null)
    }

    return await query
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

export default { getAllThemes, getAllDifficulties , getAllOrganizations, getAllWorkshops, getAllLecturers, getFilteredLecturers, getFilteredWorkshops};