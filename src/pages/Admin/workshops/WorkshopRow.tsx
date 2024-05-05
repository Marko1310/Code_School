import { useRef } from 'react';
import Modal from '../../../components/Shared/modals/Modal';
import AddOrUpdateWorkshopModal from '../../../components/Shared/modals/AddOrUpdateWorkshopModal';
import TableButton from '../../../components/UI/Table/TableButton';
import useModal from '../../../hooks/useModal';
import { WorkshopType } from '../../../types/data.types';
import { useDeleteWorkshop } from '../../../queries/workshopsQueries';
import DeleteModal from '../../../components/Shared/modals/DeleteModal';

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
      <div className="col-span-1 flex items-center justify-center border-b p-5">
        {workshop.name}
      </div>
      <div className="col-span-1 flex items-center justify-center border-b p-5">
        {workshop.id}
      </div>
      <div className="col-span-1 flex items-center justify-center border-b p-5 ">
        <TableButton value="Edit" color="green" onClick={openWorkshopModal} />
        <TableButton value="Delete" color="red" onClick={openDeleteModal} />
      </div>
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
