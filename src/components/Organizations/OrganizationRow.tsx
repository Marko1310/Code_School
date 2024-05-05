import { useRef } from 'react';
import Modal from '../Shared/modals/Modal';
import TableButton from '../Shared/UI/Table/TableButton';
import useModal from '../../hooks/useModal';
import { OrganizationType } from '../../types/data.types';
import DeleteModal from '../Shared/modals/DeleteModal';
import AddOrUpdateOrganizationModal from '../Shared/modals/AddOrUpdateOrganizationModal';
import { useDeleteOrganization } from '../../queries/organizationQueries';

type OrganizationRowProps = {
  organization: OrganizationType;
};

function OrganizationRow({ organization }: OrganizationRowProps) {
  const updateOrganizationModalRef = useRef<HTMLDialogElement>(null);
  const deletepModal = useRef<HTMLDialogElement>(null);
  const {
    openModal: openOrganizationModal,
    closeModal: closeOrganizationModal,
  } = useModal(updateOrganizationModalRef);
  const { openModal: openDeleteModal, closeModal: closeDeleteModal } =
    useModal(deletepModal);

  const { mutate, isLoading } = useDeleteOrganization();

  return (
    <>
      <div className="col-span-1 flex items-center justify-center border-b p-5">
        {organization.name}
      </div>
      <div className="col-span-1 flex items-center justify-center border-b p-5">
        {organization.address}
      </div>
      <div className="col-span-1 flex items-center justify-center border-b p-5 ">
        <TableButton
          value="Edit"
          color="green"
          onClick={openOrganizationModal}
        />
        <TableButton value="Delete" color="red" onClick={openDeleteModal} />
      </div>
      <Modal ref={updateOrganizationModalRef}>
        <AddOrUpdateOrganizationModal
          closeModal={closeOrganizationModal}
          type="update"
          organization={organization}
        />
      </Modal>
      <Modal ref={deletepModal}>
        <DeleteModal
          name={organization.name}
          id={organization.id}
          closeModal={closeDeleteModal}
          deleteFunction={mutate}
          isLoading={isLoading}
          title="Organization"
        />
      </Modal>
    </>
  );
}

export default OrganizationRow;
