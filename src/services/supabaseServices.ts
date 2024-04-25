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

const getAllLecturers = async () => {
    return await supabaseClient.from('lecturers').select().throwOnError()
}

export default { getAllThemes, getAllDifficulties , getAllOrganizations, getAllLecturers};
