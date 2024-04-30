import supabaseClient from '../config/supabaseClient';

const getAllThemes = async () => {
  return await supabaseClient.from('themes').select();
};

export default { getAllThemes};