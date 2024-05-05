import supabaseClient from '../config/supabaseClient';
import { AddOrganizationDto, UpdateOrganizationDto } from '../types/forms.type';

const getAllOrganizations = async () => {
    return await supabaseClient.from('organizations').select()
}

const addOrganization = async (formData:AddOrganizationDto) => {
    const {organization_name, organization_address} = formData

        const {data, error} = await supabaseClient.rpc ('add_organization', {
            organization_name, organization_address
        })
        if (error) throw new Error
        return data
}

const updateOrganization = async (formData:UpdateOrganizationDto) => {
    const {organization_id, organization_name, organization_address} = formData
        const {data, error} = await supabaseClient.rpc ('update_organization', {
            organization_id, organization_name, organization_address
        })
        if (error) throw new Error
        return data
}

const deleteOrganization = async (organization_id:number) => {
    await supabaseClient.from('organizations').delete().eq("id", organization_id)
}

export default { getAllOrganizations, addOrganization, updateOrganization, deleteOrganization};