import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetThemes = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_THEMES],
        queryFn: () => supabaseServices.getAllThemes()
    })
    const themes = data?.data
    return {themes, isLoading, error}
}

export {useGetThemes}