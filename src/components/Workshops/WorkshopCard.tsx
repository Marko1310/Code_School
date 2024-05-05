import { useRef } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { WorkshopType } from '../../types/data.types';
import CardInfo from '../CardInfo';
import AdminButton from '../Shared/UI/AdminButton';
import useModal from '../../hooks/useModal';
import Modal from '../Shared/modals/Modal';
import AddOrUpdateWorkshopModal from '../Shared/modals/AddOrUpdateWorkshopModal';
import AddUserToWorkshopModal from '../Shared/modals/AddUserToWorkshopModal';

type WorkshopProps = {
  workshop: WorkshopType;
};

function WorkshopCard({ workshop }: WorkshopProps) {
  const { isAdmin } = useAdmin();
  const workshopModalRef = useRef<HTMLDialogElement>(null);
  const applicationModalRef = useRef<HTMLDialogElement>(null);
  const { openModal: openWorkshopModal, closeModal: closeWorkshopModal } =
    useModal(workshopModalRef);
  const { openModal: openApplicationModal, closeModal: closeApplicationModal } =
    useModal(applicationModalRef);

  return (
    <div className="mb-8 flex h-fit flex-col rounded-lg border border-border bg-foreground p-6 text-text">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <p className="font-base mb-8 w-56 border-b-2 pr-6 text-3xl lg:border-b-0 lg:border-r-2">
          {workshop.name}
        </p>
        <div className="flex w-full flex-col gap-4 pl-4">
          <CardInfo title="Description">
            <p>{workshop.description}</p>
          </CardInfo>
          <CardInfo title="Difficulty">
            <p>{workshop.difficulties?.name}</p>
          </CardInfo>
          <CardInfo title="Themes">
            {workshop?.themes?.map((theme, i) => {
              return (
                <div key={i} className="flex gap-1">
                  <p>
                    {theme.name}
                    {i === workshop.themes.length - 1 ? '' : ','}
                  </p>
                  <p>{''}</p>
                </div>
              );
            })}
          </CardInfo>
          <CardInfo title="Lecturers">
            {workshop?.lecturers?.map((lecturer, i) => {
              return (
                <div key={i} className="flex gap-1">
                  <p>
                    {lecturer.name}
                    {i === workshop.lecturers.length - 1 ? '' : ','}
                  </p>
                  <p>{''}</p>
                </div>
              );
            })}
          </CardInfo>
          <div className="mt-4 flex justify-end gap-2">
            {isAdmin && (
              <AdminButton
                value="Update workshop"
                onClick={openWorkshopModal}
              />
            )}
            <button
              onClick={openApplicationModal}
              className="bg-user rounded-lg border border-border px-6 py-3 transition-all hover:bg-green-200"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <Modal ref={workshopModalRef}>
        <AddOrUpdateWorkshopModal
          closeModal={closeWorkshopModal}
          workshop={workshop}
          type="update"
        />
      </Modal>
      <Modal ref={applicationModalRef}>
        <AddUserToWorkshopModal
          closeModal={closeApplicationModal}
          workshop_id={workshop.id}
        />
      </Modal>
    </div>
  );
}

export default WorkshopCard;
