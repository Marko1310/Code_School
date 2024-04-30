import supabaseClient from '../config/supabaseClient';

const getAllDifficulties = async () => {
    return await supabaseClient.from('difficulties').select()
}

export default { getAllDifficulties};