import { useRef } from 'react';
import Modal from '../Shared/modals/Modal';
import TableButton from '../Shared/UI/Table/TableButton';
import useModal from '../../hooks/useModal';
import { LecturerType } from '../../types/data.types';
import DeleteModal from '../Shared/modals/DeleteModal';
import AddOrUpdateLecturerModal from '../Shared/modals/AddOrUpdateLecturerModal';
import { useDeleteLecturer } from '../../queries/lecturersQueries';

type LecturerRowProps = {
  lecturer: LecturerType;
};

function LecturerRow({ lecturer }: LecturerRowProps) {
  const updateLecturerModalRef = useRef<HTMLDialogElement>(null);
  const deletepModal = useRef<HTMLDialogElement>(null);
  const { openModal: openLecturerModal, closeModal: closeLecturerModal } =
    useModal(updateLecturerModalRef);
  const { openModal: openDeleteModal, closeModal: closeDeleteModal } =
    useModal(deletepModal);

  const { mutate, isLoading } = useDeleteLecturer();

  return (
    <>
      <div className="col-span-1 flex items-center justify-center border-b p-5">
        {lecturer.name}
      </div>
      <div className="col-span-1 flex items-center justify-center border-b p-5">
        {lecturer.organizations?.name}
      </div>
      <div className="col-span-1 flex items-center justify-center border-b p-5 ">
        <TableButton value="Edit" color="green" onClick={openLecturerModal} />
        <TableButton value="Delete" color="red" onClick={openDeleteModal} />
      </div>
      <Modal ref={updateLecturerModalRef}>
        <AddOrUpdateLecturerModal
          closeModal={closeLecturerModal}
          type="update"
          lecturer={lecturer}
        />
      </Modal>
      <Modal ref={deletepModal}>
        <DeleteModal
          name={lecturer.name}
          id={lecturer.id}
          closeModal={closeDeleteModal}
          deleteFunction={mutate}
          isLoading={isLoading}
          title="Lecturer"
        />
      </Modal>
    </>
  );
}

export default LecturerRow;
