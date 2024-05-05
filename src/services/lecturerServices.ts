import supabaseClient from '../config/supabaseClient';
import { AddNewLecturerDto, UpdateLecturerDto } from '../types/forms.type';


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

const addLecturer = async (formData:AddNewLecturerDto) => {
    const {lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids} = formData

        const {data, error} = await supabaseClient.rpc ('add_lecturer2', {
            lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids
        })
        if (error) throw new Error
        return data
}

const updateLecturer = async (formData:UpdateLecturerDto) => {
    const {lecturer_id, lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids} = formData
        const {data, error} = await supabaseClient.rpc ('update_lecturer2', {
            lecturer_id, lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids
        })
        if (error) throw new Error
        return data
}


export default { getAllLecturers, getFilteredLecturers, addLecturer, updateLecturer};