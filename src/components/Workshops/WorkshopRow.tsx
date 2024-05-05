import { useRef } from 'react';
import Modal from '../Shared/modals/Modal';
import AddOrUpdateWorkshopModal from '../Shared/modals/AddOrUpdateWorkshopModal';
import TableButton from '../Shared/UI/Table/TableButton';
import useModal from '../../hooks/useModal';
import { WorkshopType } from '../../types/data.types';
import { useDeleteWorkshop } from '../../queries/workshopsQueries';
import DeleteModal from '../Shared/modals/DeleteModal';
import TableColumn from '../Shared/UI/Table/TableColumn';

type WorkshopRowProps = {
  workshop: WorkshopType;
};

function WorkshopRow({ workshop }: WorkshopRowProps) {
  const updateWorkshopModalRef = useRef<HTMLDialogElement>(null);
  const deletepModal = useRef<HTMLDialogElement>(null);
  const { openModal: openWorkshopModal, closeModal: closeWorkshopModal } =
    useModal(updateWorkshopModalRef);
  const { openModal: openDeleteModal, closeModal: closeDeleteModal } =
    useModal(deletepModal);

  const { mutate, isLoading } = useDeleteWorkshop();

  return (
    <>
      <TableColumn>{workshop.name}</TableColumn>
      <TableColumn>{workshop.id}</TableColumn>
      <TableColumn>
        <TableButton value="Edit" color="green" onClick={openWorkshopModal} />
        <TableButton value="Delete" color="red" onClick={openDeleteModal} />
      </TableColumn>
      <Modal ref={updateWorkshopModalRef}>
        <AddOrUpdateWorkshopModal
          closeModal={closeWorkshopModal}
          type="update"
          workshop={workshop}
        />
      </Modal>
      <Modal ref={deletepModal}>
        <DeleteModal
          name={workshop.name}
          id={workshop.id}
          closeModal={closeDeleteModal}
          deleteFunction={mutate}
          isLoading={isLoading}
          title="Workshop"
        />
      </Modal>
    </>
  );
}

export default WorkshopRow;
