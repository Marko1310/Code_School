import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetAllDifficulties = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_DIFFICULTIES],
        queryFn: () => supabaseServices.getAllDifficulties()
    })
    const allDifficulties = data?.data
    return {allDifficulties, isLoading, error}
}

export {useGetAllDifficulties}