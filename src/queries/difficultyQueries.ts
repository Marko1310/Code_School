import { useQuery } from "react-query"
import { queryKeys } from "../types/queryKeys.types"
import difficultyServices from "../services/difficultyServices"

const useGetDifficulties = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_DIFFICULTIES],
        queryFn: () => difficultyServices.getAllDifficulties()
    })
    const difficulties = data?.data
    return {difficulties, isLoading, error}
}

export {useGetDifficulties}