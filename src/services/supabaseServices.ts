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

const getFilteredLecturers = async (organizationId?:number, themeIds?:number[]) => {
    let query = supabaseClient.from('lecturers').select(`id, name, profile_url, bio, themes(id, name), organizations(id, name)`)

    if (organizationId) {
        query = query.eq('organization_id', organizationId)
    }

    if (themeIds && themeIds?.length > 0){
        query = query.in('themes.id', themeIds).not('themes', 'is', null)
    }

    return await query
}

const getFilteredWorkshops = async (difficultyId?:number, themeIds?:number[]) => {
    let query = supabaseClient.from('workshops').select(`id, title, themes (id, name), difficulties(id, level)`)

    if (difficultyId) {
        query = query.eq('difficulty_id', difficultyId)
    }

    if (themeIds && themeIds?.length > 0) {
        query = query.in('themes.id', themeIds).not('themes', 'is', null)
    }

    return await query
}

export default { getAllThemes, getAllDifficulties , getAllOrganizations, getFilteredLecturers, getFilteredWorkshops};