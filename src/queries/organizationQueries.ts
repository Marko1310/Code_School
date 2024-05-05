import { useMutation, useQuery, useQueryClient } from "react-query"
import { queryKeys } from "../types/query.types"
import organizationServices from "../services/organizationServices"
import { AddOrganizationDto, UpdateOrganizationDto } from "../types/forms.type"
import toast from "react-hot-toast"

const useGetOrganizations = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_ORGANIZATIONS],
        queryFn: () => organizationServices.getAllOrganizations()
    })
    const organizations = data?.data
    return {organizations, isLoading, error}
}

const useAddOrganization = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:AddOrganizationDto) => organizationServices.addOrganization(data), 
        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey: [ queryKeys.ALL_ORGANIZATIONS],
            })
            toast.success('Organization successfully added ')
        },
        onError: () => {
            toast.error('Organization could not be added');
          },
    })
    return {mutate, isLoading}
}

const useUpdatetOrganization = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:UpdateOrganizationDto) => organizationServices.updateOrganization(data), 
        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey: [ queryKeys.ALL_ORGANIZATIONS],
            })
            toast.success('Organization successfully updated')
        },
        onError: () => {
            toast.error('Organization could not be updated');
          },
    })
    return {mutate, isLoading}
}

export {useGetOrganizations, useAddOrganization, useUpdatetOrganization}