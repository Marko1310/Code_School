import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGeFilteredlLecturers = (organizationId?: number, themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.LECTURERS_WITH_DETAILS],
        queryFn: () => supabaseServices.getFilteredLecturers(organizationId, themesId)
    })
    const allLecturers = data?.data
    return {allLecturers, isLoading, error}
}

export {useGeFilteredlLecturers}