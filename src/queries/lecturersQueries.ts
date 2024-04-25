import { useQuery } from "react-query"
import supabaseServices from "../services/supabaseServices"

const useGetAllLecturers = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [],
        queryFn: () => supabaseServices.getAllLecturers()
    })
    const allLecturers = data?.data
    return {allLecturers, isLoading, error}
}

export {useGetAllLecturers}