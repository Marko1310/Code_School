import supabaseClient from '../config/supabaseClient';
import { AddLecturerDto, UpdateLecturerDto } from '../types/forms.type';
import themeServices from './themeServices';


const getAllLecturers = async () => {
    return await supabaseClient.from('lecturers').select(`id, name, created_at, organizations(name)`)
}

const getFilteredLecturers = async (organizationId?:number[], themeIds?:number[]) => {
    let query = supabaseClient.from('lecturers').select(`id, name, profile_url, bio, themes(id, name), organizations(id, name)`)

    if (organizationId && organizationId?.length > 0) {
        query = query.in('organization_id', organizationId).not('organizations' , 'is' , null)
    }
    if (themeIds && themeIds.length > 0) {
        query = query.in('themes.id', themeIds).not('themes', 'is', null);
    }

    const { data: lecturers } = await query;

    if (lecturers) {
        await Promise.all(lecturers.map(async (lecturer) => {
            lecturer.themes = await fetchLecturerThemes(lecturer.id);
        }));
    }

    return lecturers;
};

const fetchLecturerThemes = async (lecturerId: number) => {
    const { data: lecturerThemes } = await themeServices.getLecturerThemes(lecturerId);
    return lecturerThemes?.map(theme => theme?.themes).filter(theme => theme !== null) as { id: number; name: string }[];
};

const addLecturer = async (formData:AddLecturerDto) => {
    const {lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids} = formData

        const {data, error} = await supabaseClient.rpc ('add_lecturer', {
            lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids
        })
        if (error) throw new Error
        return data
}

const updateLecturer = async (formData:UpdateLecturerDto) => {
    const {lecturer_id, lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids} = formData
        const {data, error} = await supabaseClient.rpc ('update_lecturer', {
            lecturer_id, lecturer_name, lecturer_bio, lecturer_organization_id, theme_ids
        })
        if (error) throw new Error
        return data
}

const deleteLecturer = async (lecturer_id:number) => {
    await supabaseClient.from('lecturers').delete().eq("id", lecturer_id)
}

const getWorkshopLecturers = async (workshopId: number) => {
   return await supabaseClient.from('workshop_lecturers')
    .select('lecturers (id, name)')
    .eq('workshops_id', workshopId);
}

export default { getAllLecturers, getFilteredLecturers, addLecturer, updateLecturer, deleteLecturer, getWorkshopLecturers};