import supabaseClient from '../config/supabaseClient';


const getAllLecturers = async () => {
    return await supabaseClient.from('lecturers').select(`id, name, created_at, organizations(name)`)
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


export default { getAllLecturers, getFilteredLecturers};