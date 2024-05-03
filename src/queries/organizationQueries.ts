import { useQuery } from "react-query"
import { queryKeys } from "../types/query.types"
import organizationServices from "../services/organizationServices"

const useGetOrganizations = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey:[queryKeys.ALL_ORGANIZATIONS],
        queryFn: () => organizationServices.getAllOrganizations()
    })
    const organizations = data?.data
    return {organizations, isLoading, error}
}

export {useGetOrganizations}