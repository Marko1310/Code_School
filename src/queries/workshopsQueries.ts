import { useQuery } from "react-query"
import { queryKeys } from "../types/queryKeys.types"
import workshopServices from "../services/workshopServices"

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

export {useGetAllWorkshops, useGetFilteredWorkshops}