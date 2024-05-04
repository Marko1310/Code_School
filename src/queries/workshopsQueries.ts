import { useMutation, useQuery, useQueryClient } from "react-query"
import { queryKeys } from "../types/query.types"
import workshopServices from "../services/workshopServices"
import toast from "react-hot-toast"
import { AddNewWorkshopDto } from "../types/forms.type"


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
    const filteredWorkshops = data?.data
    return {filteredWorkshops, isLoading, error}
}

const useAddNewWorkshop = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:AddNewWorkshopDto) => workshopServices.addNewWorkshop(data), 
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

export {useGetAllWorkshops, useGetFilteredWorkshops, useAddNewWorkshop}

