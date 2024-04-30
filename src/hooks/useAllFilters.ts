import { useGetDifficulties } from "../queries/difficultyQueries";
import { useGetOrganizations } from "../queries/organizationQueries";
import { useGetThemes } from "../queries/themeQueries";

const useAllFilters = () => {
    const {themes, isLoading: loadingThemes} = useGetThemes()
    const {organizations, isLoading: loadingOrganizations} = useGetOrganizations()
    const {difficulties, isLoading: loadingDifficulties} = useGetDifficulties()

    const isLoading = loadingThemes || loadingOrganizations || loadingDifficulties

    return {themes, organizations, difficulties, isLoading}
}

export default useAllFilters