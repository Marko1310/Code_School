import organizationServices from "../services/organizationServices"
import toast from "react-hot-toast"
import { queryKeys } from "../types/query.types"
import { AddOrganizationDto, UpdateOrganizationDto } from "../types/forms.type"
import { useMutation, useQuery, useQueryClient } from "react-query"

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

const useDeleteOrganization = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: number) => organizationServices.deleteOrganization(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.ALL_ORGANIZATIONS],
      });
      toast.success('Organization successfully deleted');
    },
    onError: () => {
      toast.error('Organization could not be deleted');
    },
  });
  return { mutate, isLoading };
}

export {useGetOrganizations, useAddOrganization, useUpdatetOrganization, useDeleteOrganization}