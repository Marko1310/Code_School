import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetDifficulties = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_DIFFICULTIES],
        queryFn: () => supabaseServices.getAllDifficulties()
    })
    const difficulties = data?.data
    return {difficulties, isLoading, error}
}

export {useGetDifficulties}