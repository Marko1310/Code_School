import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import FormTitle from '../UI/Forms/FormTitle';
import InputField from '../UI/Forms/InputField';

import {
  AddUserToWorkshopDto,
  AddUserToWorkshopSchema,
} from '../../../types/forms.type';
import { useAddUserToWorkshop } from '../../../queries/workshopsQueries';

type AddUserToWorkshopProps = {
  closeModal: () => void;
  workshop_id: number;
};

function AddUserToWorkshopModal({
  closeModal,
  workshop_id,
}: AddUserToWorkshopProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddUserToWorkshopDto>({
    defaultValues: {
      workshop_id,
    },
    resolver: zodResolver(AddUserToWorkshopSchema),
    mode: 'onChange',
  });
  const { mutate: addUserToWorkshop, isLoading } = useAddUserToWorkshop();

  const onSubmit = (user: AddUserToWorkshopDto) => {
    const newUser = { ...user };
    addUserToWorkshop(newUser);
  };

  useEffect(() => {
    if (!isLoading) {
      closeModal();
    }
  }, [isLoading, closeModal]);

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title="Application" />
      <div className="flex w-96 flex-col gap-4 lg:flex lg:w-[600px] lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Name:</label>
            <InputField
              name="name"
              register={register}
              placeholder="Name"
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <InputField
              name="email"
              register={register}
              placeholder="Email"
              errors={errors}
            />
          </div>
        </div>
      </div>

      <button
        disabled={!isValid || isLoading}
        className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-primary p-3 transition-all hover:bg-primary-foreground disabled:bg-disabled"
        type="submit"
      >
        Attend workshop
      </button>
    </form>
  );
}
export default AddUserToWorkshopModal;
