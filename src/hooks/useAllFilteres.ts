import { useGetAllDifficulties } from "../queries/difficultyQueries";
import { useGetAllOrganizations } from "../queries/organizationQueries";
import { useGetAllThemes } from "../queries/themeQueries";

const useAllFilteres = () => {
    const {allThemes, isLoading: loadingThemes} = useGetAllThemes()
    const {allOrganizations, isLoading: loadingOrganizations} = useGetAllOrganizations()
    const {allDifficulties, isLoading: loadingDifficulties} = useGetAllDifficulties()

    const isLoading = loadingThemes || loadingOrganizations || loadingDifficulties

    return {allThemes, allOrganizations, allDifficulties, isLoading}
}

export default useAllFilteres