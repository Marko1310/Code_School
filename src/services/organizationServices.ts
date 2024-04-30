import supabaseClient from '../config/supabaseClient';

const getAllOrganizations = async () => {
    return await supabaseClient.from('organizations').select()
}

export default { getAllOrganizations};