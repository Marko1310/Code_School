import { useQuery } from "react-query"
import { queryKeys } from "../types/queryKeys.types"
import themeServices from "../services/themeServices"

const useGetThemes = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_THEMES],
        queryFn: () => themeServices.getAllThemes()
    })
    const themes = data?.data
    return {themes, isLoading, error}
}

export {useGetThemes}