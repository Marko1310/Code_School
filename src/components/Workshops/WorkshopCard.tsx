import { useRef } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { WorkshopType } from '../../types/data.types';
import CardInfo from '../CardInfo';
import AdminButton from '../UI/AdminButton';
import useModal from '../../hooks/useModal';
import Modal from '../Shared/modals/Modal';
import AddOrUpdateWorkshopModal from '../Shared/modals/AddOrupdateWorkshopModal';

type WorkshopProps = {
  workshop: WorkshopType;
};

function WorkshopCard({ workshop }: WorkshopProps) {
  const { isAdmin } = useAdmin();
  const addOrUpdateNewWorkshopModalRef = useRef<HTMLDialogElement>(null);
  const { openModal, closeModal } = useModal(addOrUpdateNewWorkshopModalRef);

  return (
    <div className="mb-8 flex h-fit flex-col rounded-lg border bg-white p-6">
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
              <AdminButton value="Update workshop" onClick={openModal} />
            )}
            <button className="rounded-lg border border-black px-6 py-3 transition-all hover:bg-green-200">
              Apply
            </button>
          </div>
        </div>
      </div>
      <Modal ref={addOrUpdateNewWorkshopModalRef}>
        <AddOrUpdateWorkshopModal
          closeModal={closeModal}
          workshop={workshop}
          type="update"
        />
      </Modal>
    </div>
  );
}

export default WorkshopCard;
