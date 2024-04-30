import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGeFilteredlLecturers = (organizationId?: number[], themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.LECTURERS_WITH_DETAILS, organizationId, themesId],
        queryFn: () => supabaseServices.getFilteredLecturers(organizationId, themesId)
    })
    const filteredLecturers = data?.data
    return {filteredLecturers, isLoading, error}
}

export {useGeFilteredlLecturers}