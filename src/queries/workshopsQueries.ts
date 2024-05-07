import workshopServices from "../services/workshopServices"
import toast from "react-hot-toast"
import { queryKeys } from "../types/query.types"
import { AddUserToWorkshopDto, AddWorkshopDto, UpdateWorkshopDto } from "../types/forms.type"
import { useMutation, useQuery, useQueryClient } from "react-query"


const useGetAllWorkshops = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.ALL_WORKSHOPS],
        queryFn: () => workshopServices.getAllWorkshops()
    })
    const allWorkshops = data?.data
    return {allWorkshops, isLoading, error}
}

const useGetFilteredWorkshops = (lecturerId?:string, difficultyId?: Array<number>, themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.WORKSHOPS_WITH_DETAILS, lecturerId, difficultyId, themesId],
        queryFn: () => workshopServices.getFilteredWorkshops(lecturerId, difficultyId, themesId)
    })
    const filteredWorkshops = data
    return {filteredWorkshops, isLoading, error}
}

const useAddWorkshop = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:AddWorkshopDto) => workshopServices.addWorkshop(data), 
        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey: [ queryKeys.WORKSHOPS_WITH_DETAILS],
            })
            queryClient.invalidateQueries({
                queryKey: [queryKeys.ALL_WORKSHOPS],
            })
            toast.success('Workshop successfully added ')
        },
        onError: () => {
            toast.error('Workshop could not be added');
          },
    })
    return {mutate, isLoading}
}

const useUpdatetWorkshop = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:UpdateWorkshopDto) => workshopServices.updateWorkshop(data), 
        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey: [ queryKeys.WORKSHOPS_WITH_DETAILS],
            })
            queryClient.invalidateQueries({
                queryKey: [queryKeys.ALL_WORKSHOPS],
            })
            toast.success('Workshop successfully updated')
        },
        onError: () => {
            toast.error('Workshop could not be updated');
          },
    })
    return {mutate, isLoading}
}

const useDeleteWorkshop = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: number) => workshopServices.deleteWorkshop(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.WORKSHOPS_WITH_DETAILS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.ALL_WORKSHOPS],
    });
      toast.success('Workshop successfully deleted');
    },
    onError: () => {
      toast.error('Workshop could not be deleted');
    },
  });
  return { mutate, isLoading };
}

const useAddUserToWorkshop = () => {
  const queryClient = useQueryClient();
const { mutate, isLoading } = useMutation({
  mutationFn: (data: AddUserToWorkshopDto) => workshopServices.addUserToWorkshop(data),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.WORKSHOPS_WITH_DETAILS],
    });
    queryClient.invalidateQueries({
      queryKey: [queryKeys.ALL_WORKSHOPS],
  });
    toast.success('You have succesfully applied to the workshop');
  },
  onError: () => {
    toast.error('Ooops, looks like you already applied');
  },
});
return { mutate, isLoading };
}

export {useGetAllWorkshops, useGetFilteredWorkshops, useAddWorkshop, useUpdatetWorkshop, useDeleteWorkshop, useAddUserToWorkshop}

