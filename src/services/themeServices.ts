import supabaseClient from '../config/supabaseClient';

const getAllThemes = async () => {
  return await supabaseClient.from('themes').select();
};

const getWorkshopThemes = async (workshopId: number) => {
  return await supabaseClient
    .from('workshop_themes')
    .select('themes (id, name)')
    .eq('workshops_id', workshopId);
}

const getLecturerThemes = async (lecturerId: number) => {
  return await supabaseClient
    .from('lecturer_themes')
    .select('themes (id, name)')
    .eq('lecturers_id', lecturerId);
}

export default { getAllThemes, getWorkshopThemes, getLecturerThemes};