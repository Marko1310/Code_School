import Modal from '../Shared/modals/Modal';
import DeleteModal from '../Shared/modals/DeleteModal';
import AddOrUpdateOrganizationModal from '../Shared/modals/AddOrUpdateOrganizationModal';
import TableButton from '../Shared/UI/Table/TableButton';
import TableColumn from '../Shared/UI/Table/TableColumn';
import useModal from '../../hooks/useModal';
import { useDeleteOrganization } from '../../queries/organizationQueries';
import { useRef } from 'react';
import { OrganizationType } from '../../types/data.types';

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
      <TableColumn>{organization.name}</TableColumn>
      <TableColumn>{organization.address}</TableColumn>
      <TableColumn>
        <TableButton
          value="Edit"
          color="green"
          onClick={openOrganizationModal}
        />
        <TableButton value="Delete" color="red" onClick={openDeleteModal} />
      </TableColumn>
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
