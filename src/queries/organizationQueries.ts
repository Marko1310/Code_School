import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"
import { queryKeys } from "../types/queryKeys.types"

const useGetOrganizations = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_ORGANIZATIONS],
        queryFn: () => supabaseServices.getAllOrganizations()
    })
    const organizations = data?.data
    return {organizations, isLoading, error}
}

export {useGetOrganizations}