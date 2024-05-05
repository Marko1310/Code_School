import lecturerServices from "../services/lecturerServices"
import { AddLecturerDto, UpdateLecturerDto } from "../types/forms.type"
import { queryKeys } from "../types/query.types"
import { useMutation, useQuery, useQueryClient } from "react-query"
import toast from "react-hot-toast"

const useGetAllLecturers = () => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.ALL_LECTURERS],
        queryFn: () => lecturerServices.getAllLecturers()
    })
    const allLecturers = data?.data
    return {allLecturers, isLoading, error}
}

const useGeFilteredlLecturers = (organizationId?: number[], themesId?:Array<number>) => {
    const {data, isLoading, error} = useQuery ({
        queryKey: [queryKeys.LECTURERS_WITH_DETAILS, organizationId, themesId],
        queryFn: () => lecturerServices.getFilteredLecturers(organizationId, themesId)
    })
    const filteredLecturers = data?.data
    return {filteredLecturers, isLoading, error}
}

const useAddLecturer = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:AddLecturerDto) => lecturerServices.addLecturer(data), 
        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey: [ queryKeys.LECTURERS_WITH_DETAILS],
            })
            queryClient.invalidateQueries({
                queryKey: [queryKeys.ALL_LECTURERS],
            })
            toast.success('Lecturer successfully added ')
        },
        onError: () => {
            toast.error('Lecturer could not be added');
          },
    })
    return {mutate, isLoading}
}

const useUpdatetLecturer = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
        mutationFn: (data:UpdateLecturerDto) => lecturerServices.updateLecturer(data), 
        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey: [ queryKeys.LECTURERS_WITH_DETAILS],
            })
            queryClient.invalidateQueries({
                queryKey: [queryKeys.ALL_LECTURERS],
            })
            toast.success('Lecturer successfully updated')
        },
        onError: () => {
            toast.error('Lecturer could not be updated');
          },
    })
    return {mutate, isLoading}
}

const useDeleteLecturer = () => {
    const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: number) => lecturerServices.deleteLecturer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.LECTURERS_WITH_DETAILS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.ALL_LECTURERS],
    });
      toast.success('Lecturer successfully deleted');
    },
    onError: () => {
      toast.error('Lecturer could not be deleted');
    },
  });
  return { mutate, isLoading };
}

export {useGetAllLecturers, useGeFilteredlLecturers, useAddLecturer, useUpdatetLecturer, useDeleteLecturer}