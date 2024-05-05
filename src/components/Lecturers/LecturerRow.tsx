import TableButton from '../Shared/UI/Table/TableButton';
import DeleteModal from '../Shared/modals/DeleteModal';
import AddOrUpdateLecturerModal from '../Shared/modals/AddOrUpdateLecturerModal';
import Modal from '../Shared/modals/Modal';
import TableColumn from '../Shared/UI/Table/TableColumn';
import useModal from '../../hooks/useModal';
import { useDeleteLecturer } from '../../queries/lecturersQueries';
import { useRef } from 'react';
import { LecturerType } from '../../types/data.types';

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
      <TableColumn>{lecturer.name}</TableColumn>
      <TableColumn>{lecturer.organizations?.name}</TableColumn>
      <TableColumn>
        <TableButton value="Edit" color="green" onClick={openLecturerModal} />
        <TableButton value="Delete" color="red" onClick={openDeleteModal} />
      </TableColumn>
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
