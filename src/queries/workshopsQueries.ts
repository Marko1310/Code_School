import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetAllWorkshops = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.ALL_WORKSHOPS],
        queryFn: () => supabaseServices.getAllWorkshops()
    })
    const allWorkshops = data?.data
    return {allWorkshops, isLoading, error}
}

const useGetFilteredWorkshops = (lecturerId?:string, difficultyId?: Array<number>, themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.WORKSHOPS_WITH_DETAILS, lecturerId, difficultyId, themesId],
        queryFn: () => supabaseServices.getFilteredWorkshops(lecturerId, difficultyId, themesId)
    })
    const filteredWorkshops = data?.data
    return {filteredWorkshops, isLoading, error}
}

export {useGetAllWorkshops, useGetFilteredWorkshops}