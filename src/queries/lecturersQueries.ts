import { useQuery } from "react-query"
import { queryKeys } from "../types/query.types"
import lecturerServices from "../services/lecturerServices"

const useGetAllLecturers = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.ALL_LECTURERS],
        queryFn: () => lecturerServices.getAllLecturers()
    })
    const allLecturers = data?.data
    return {allLecturers, isLoading, error}
}

const useGeFilteredlLecturers = (organizationId?: number[], themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.LECTURERS_WITH_DETAILS, organizationId, themesId],
        queryFn: () => lecturerServices.getFilteredLecturers(organizationId, themesId)
    })
    const filteredLecturers = data?.data
    return {filteredLecturers, isLoading, error}
}

export {useGetAllLecturers, useGeFilteredlLecturers}