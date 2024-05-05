import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import FormTitle from '../../UI/Forms/FormTitle';
import InputField from '../../UI/Forms/InputField';
import Select from '../../UI/Forms/Select';
import TextArea from '../../UI/Forms/TextArea';
import { LecturerType } from '../../../types/data.types';
import {
  AddNewLecturerDto,
  AddNewLecturerSchema,
  UpdateLecturerDto,
  UpdateLecturerSchema,
} from '../../../types/forms.type';
import {
  useAddLecturer,
  useUpdatetLecturer,
} from '../../../queries/lecturersQueries';
import { useGetOrganizations } from '../../../queries/organizationQueries';
import { useGetThemes } from '../../../queries/themeQueries';
import CheckBox from '../../UI/Forms/CheckBox';

type newWorkshopProps = {
  type: 'add' | 'update';
  closeModal: () => void;
  lecturer?: LecturerType;
};

function AddOrupdateLecturerModal({
  type,
  closeModal,
  lecturer,
}: newWorkshopProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddNewLecturerDto | UpdateLecturerDto>({
    defaultValues: {
      lecturer_id: lecturer?.id,
      lecturer_name: lecturer?.name,
      lecturer_bio: lecturer?.bio,
      lecturer_organization_id: lecturer?.organizations?.id,
    },
    resolver:
      type === 'add'
        ? zodResolver(AddNewLecturerSchema)
        : zodResolver(UpdateLecturerSchema),
    mode: 'onChange',
  });
  const { mutate: addLecturer, isLoading: addLecturerLoading } =
    useAddLecturer();
  const { mutate: updateLecturer, isLoading: updateLecturerLoading } =
    useUpdatetLecturer();

  const onSubmit = (lecturer: AddNewLecturerDto | UpdateLecturerDto) => {
    const updatedLecturer = { ...lecturer };
    type === 'add'
      ? addLecturer(lecturer as AddNewLecturerDto)
      : updateLecturer(updatedLecturer as UpdateLecturerDto);
  };

  const { organizations } = useGetOrganizations();
  const { themes } = useGetThemes();

  useEffect(() => {
    if (!addLecturerLoading || !updateLecturerLoading) {
      closeModal();
    }
  }, [addLecturerLoading, updateLecturerLoading, closeModal]);

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle
        title={`${type === 'add' ? 'Add Lecturer' : 'Update Lecturer'}`}
      />
      <div className="flex w-96 flex-col gap-4 lg:flex lg:w-[600px] lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Lecturer Name:</label>
            <InputField
              name="lecturer_name"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Bio:</label>
            <TextArea
              name="lecturer_bio"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Organization:</label>
            <Select
              name="lecturer_organization_id"
              options={organizations}
              register={register}
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Themes:</label>
            <div className="rounded-md border border-neutral-500 px-4">
              {themes?.map((theme) => (
                <CheckBox
                  key={theme.id}
                  name="theme_ids"
                  register={register}
                  value={theme}
                />
              ))}
            </div>
            {errors.theme_ids && (
              <p className="text-red-500">{errors.theme_ids.message}</p>
            )}
          </div>
        </div>
      </div>

      <button
        disabled={!isValid || addLecturerLoading || updateLecturerLoading}
        className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-primary p-3 transition-all hover:bg-primary-foreground disabled:bg-disabled"
        type="submit"
      >
        {`${type === 'add' ? 'Add Lecturer' : 'Update Lecturer'}`}
      </button>
    </form>
  );
}
export default AddOrupdateLecturerModal;
