import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useAddNewWorkshop } from '../../../queries/workshopsQueries';
import {
  AddNewWorkshopDto,
  AddNewWorkshopSchema,
} from '../../../types/forms.type';
import FormTitle from '../../UI/Forms/FormTitle';
import InputField from '../../UI/Forms/InputField';
import Select from '../../UI/Forms/Select';
import { useGetDifficulties } from '../../../queries/difficultyQueries';
import { useGetAllLecturers } from '../../../queries/lecturersQueries';
import { useGetThemes } from '../../../queries/themeQueries';
import CheckBox from '../../UI/Forms/CheckBox';
import TextArea from '../../UI/Forms/TextArea';

type newWorkshopProps = {
  closeModal: () => void;
};

function NewWorkshopModal({ closeModal }: newWorkshopProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddNewWorkshopDto>({
    resolver: zodResolver(AddNewWorkshopSchema),
    mode: 'onChange',
  });
  const { mutate, isLoading } = useAddNewWorkshop();

  const onSubmit = (newWorkshop: AddNewWorkshopDto) => {
    mutate(newWorkshop);
  };

  const { difficulties } = useGetDifficulties();
  const { allLecturers } = useGetAllLecturers();
  const { themes } = useGetThemes();

  useEffect(() => {
    if (!isLoading) {
      closeModal();
    }
  }, [isLoading, closeModal]);

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title="Add new Workshop" />
      <div className="flex w-96 flex-col gap-4 lg:flex lg:w-[600px] lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Workshop Name:</label>
            <InputField
              name="name"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Description:</label>
            <TextArea
              name="description"
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
              name="difficulty_id"
              defaultValue=""
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
        disabled={!isValid || isLoading}
        className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-primary p-3 transition-all hover:bg-primary-foreground disabled:bg-disabled"
        type="submit"
      >
        {isLoading ? 'Saving' : 'Add Workshop'}
      </button>
    </form>
  );
}
export default NewWorkshopModal;
