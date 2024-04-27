import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetFilteredWorkshops = (difficultyId?: number, themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.WORKSHOPS_WITH_DETAILS],
        queryFn: () => supabaseServices.getFilteredWorkshops(difficultyId, themesId)
    })
    const allWorkshops = data?.data
    return {allWorkshops, isLoading, error}
}

export {useGetFilteredWorkshops}