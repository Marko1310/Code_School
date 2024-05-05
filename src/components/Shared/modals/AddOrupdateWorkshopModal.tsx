import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  useAddWorkshop,
  useUpdatetWorkshop,
} from '../../../queries/workshopsQueries';
import {
  AddWorkshopDto,
  AddWorkshopSchema,
  UpdateWorkshopDto,
  UpdateWorkshopSchema,
} from '../../../types/forms.type';
import FormTitle from '../../UI/Forms/FormTitle';
import InputField from '../../UI/Forms/InputField';
import Select from '../../UI/Forms/Select';
import { useGetDifficulties } from '../../../queries/difficultyQueries';
import { useGetAllLecturers } from '../../../queries/lecturersQueries';
import { useGetThemes } from '../../../queries/themeQueries';
import CheckBox from '../../UI/Forms/CheckBox';
import TextArea from '../../UI/Forms/TextArea';
import { WorkshopType } from '../../../types/data.types';

type WorkshopProps = {
  type: 'add' | 'update';
  closeModal: () => void;
  workshop?: WorkshopType;
};

function AddOrUpdateWorkshopModal({
  type,
  closeModal,
  workshop,
}: WorkshopProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddWorkshopDto | UpdateWorkshopDto>({
    defaultValues: {
      workshop_id: workshop?.id,
      workshop_name: workshop?.name,
      workshop_description: workshop?.description,
      workshop_difficulty_id: workshop?.difficulties?.id,
      lecturer_ids: workshop?.lecturers.map((el) => el.id.toString()),
      theme_ids: workshop?.themes.map((el) => el.id.toString()),
    },
    resolver:
      type === 'add'
        ? zodResolver(AddWorkshopSchema)
        : zodResolver(UpdateWorkshopSchema),
    mode: 'onChange',
  });
  const { mutate: addWorkshop, isLoading: addWorskhopLoading } =
    useAddWorkshop();
  const { mutate: updateWorkshop, isLoading: updateWorskhopLoading } =
    useUpdatetWorkshop();

  const onSubmit = (workshop: AddWorkshopDto | UpdateWorkshopDto) => {
    const updatedWorkshop = { ...workshop };
    console.log(updatedWorkshop);
    type === 'add'
      ? addWorkshop(workshop as AddWorkshopDto)
      : updateWorkshop(updatedWorkshop as UpdateWorkshopDto);
  };

  const { difficulties } = useGetDifficulties();
  const { allLecturers } = useGetAllLecturers();
  const { themes } = useGetThemes();

  useEffect(() => {
    if (!addWorskhopLoading || !updateWorskhopLoading) {
      closeModal();
    }
  }, [addWorskhopLoading, updateWorskhopLoading, closeModal]);

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle
        title={`${type === 'add' ? 'Add Workshop' : 'Update Workshop'}`}
      />
      <div className="flex w-96 flex-col gap-4 lg:flex lg:w-[600px] lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Workshop Name:</label>
            <InputField
              name="workshop_name"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Description:</label>
            <TextArea
              name="workshop_description"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Difficulty:</label>
            <Select
              name="workshop_difficulty_id"
              options={difficulties}
              register={register}
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Lecturers:</label>
            <div className="rounded-md border border-neutral-500 px-4">
              {allLecturers?.map((lecturer) => (
                <CheckBox
                  key={lecturer.id}
                  name="lecturer_ids"
                  register={register}
                  value={lecturer}
                />
              ))}
            </div>
            {errors.lecturer_ids && (
              <p className="text-red-500">{errors.lecturer_ids.message}</p>
            )}
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
        disabled={!isValid || addWorskhopLoading || updateWorskhopLoading}
        className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-primary p-3 transition-all hover:bg-primary-foreground disabled:bg-disabled"
        type="submit"
      >
        {`${type === 'add' ? 'Add Workshop' : 'Update Workshop'}`}
      </button>
    </form>
  );
}
export default AddOrUpdateWorkshopModal;
