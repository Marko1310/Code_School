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

export default { getAllThemes, getAllDifficulties , getAllOrganizations};
