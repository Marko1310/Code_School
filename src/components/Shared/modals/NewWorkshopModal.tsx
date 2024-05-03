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
import DifficultySelect from '../../UI/Forms/DifficultySelect';
import { useGetDifficulties } from '../../../queries/difficultyQueries';

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
  });
  const { mutate, isLoading } = useAddNewWorkshop();
  const onSubmit = (newWorkshop: AddNewWorkshopDto) => mutate(newWorkshop);

  useEffect(() => {
    if (!isLoading) {
      closeModal();
    }
  }, [isLoading, closeModal]);
  const { difficulties } = useGetDifficulties();

  return (
    <form
      className="flex w-96 flex-col gap-4 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormTitle title="Add new Workshop" />
      <div className="flex flex-col gap-1">
        <label>Workshop Name</label>
        <InputField
          name="name"
          register={register}
          placeholder="e.g. Push / Pull / Legs"
          errors={errors}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Description</label>
        <InputField
          name="description"
          register={register}
          placeholder="e.g. Push / Pull / Legs"
          errors={errors}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Difficulty</label>
        <DifficultySelect
          name="difficulty_id"
          defaultValue=""
          options={difficulties}
          register={register}
          errors={errors}
        />
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
