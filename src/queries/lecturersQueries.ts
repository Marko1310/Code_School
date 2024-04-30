import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetAllLecturers = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.ALL_LECTURERS],
        queryFn: () => supabaseServices.getAllLecturers()
    })
    const allLecturers = data?.data
    return {allLecturers, isLoading, error}
}

const useGeFilteredlLecturers = (organizationId?: number[], themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.LECTURERS_WITH_DETAILS, organizationId, themesId],
        queryFn: () => supabaseServices.getFilteredLecturers(organizationId, themesId)
    })
    const filteredLecturers = data?.data
    return {filteredLecturers, isLoading, error}
}

export {useGetAllLecturers, useGeFilteredlLecturers}