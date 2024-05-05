import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import FormTitle from '../../UI/Forms/FormTitle';
import InputField from '../../UI/Forms/InputField';
import { OrganizationType } from '../../../types/data.types';
import {
  AddOrganizationDto,
  AddOrganizationchema,
  UpdateOrganizationDto,
  UpdateOrganizationSchema,
} from '../../../types/forms.type';
import {
  useAddOrganization,
  useUpdatetOrganization,
} from '../../../queries/organizationQueries';

type OrganizationProps = {
  type: 'add' | 'update';
  closeModal: () => void;
  organization?: OrganizationType;
};

function AddOrUpdateOrganizationModal({
  type,
  closeModal,
  organization,
}: OrganizationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddOrganizationDto | UpdateOrganizationDto>({
    defaultValues: {
      organization_id: organization?.id,
      organization_name: organization?.name,
      organization_address: organization?.address,
    },
    resolver:
      type === 'add'
        ? zodResolver(AddOrganizationchema)
        : zodResolver(UpdateOrganizationSchema),
    mode: 'onChange',
  });
  const { mutate: addOrganization, isLoading: addOrganizationLoading } =
    useAddOrganization();
  const { mutate: updateOrganization, isLoading: updateOrganizationLoading } =
    useUpdatetOrganization();

  const onSubmit = (
    organization: AddOrganizationDto | UpdateOrganizationDto,
  ) => {
    const updatedOrganization = { ...organization };
    type === 'add'
      ? addOrganization(organization as AddOrganizationDto)
      : updateOrganization(updatedOrganization as UpdateOrganizationDto);
  };

  useEffect(() => {
    if (!addOrganizationLoading || !updateOrganizationLoading) {
      closeModal();
    }
  }, [addOrganizationLoading, updateOrganizationLoading, closeModal]);

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle
        title={`${type === 'add' ? 'Add Organization' : 'Update Organization'}`}
      />
      <div className="flex w-96 flex-col gap-4 lg:w-[600px]">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Organization Name:</label>
            <InputField
              name="organization_name"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Address:</label>
            <InputField
              name="organization_address"
              register={register}
              placeholder=""
              errors={errors}
            />
          </div>
        </div>
      </div>

      <button
        disabled={
          !isValid || addOrganizationLoading || updateOrganizationLoading
        }
        className="mt-6 flex h-14 w-full items-center justify-center rounded-md bg-primary p-3 transition-all hover:bg-primary-foreground disabled:bg-disabled"
        type="submit"
      >
        {`${type === 'add' ? 'Add Organization' : 'Update Organization'}`}
      </button>
    </form>
  );
}
export default AddOrUpdateOrganizationModal;
