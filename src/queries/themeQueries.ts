import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetAllThemes = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_THEMES],
        queryFn: () => supabaseServices.getAllThemes()
    })
    const allThemes = data?.data
    return {allThemes, isLoading, error}
}

export {useGetAllThemes}