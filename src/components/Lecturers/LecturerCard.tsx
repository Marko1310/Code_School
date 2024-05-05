import { Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { LecturerType } from '../../types/data.types';
import CardInfo from '../CardInfo';
import AdminButton from '../UI/AdminButton';
import LecturerProfile from './LecturerProfile';
import Modal from '../Shared/modals/Modal';
import AddOrupdateLecturerModal from '../Shared/modals/AddOrupdateLecturerModal';
import { useRef } from 'react';
import useModal from '../../hooks/useModal';

type LecturerProps = {
  lecturer: LecturerType;
};

function LecturerCard({ lecturer }: LecturerProps) {
  const { isAdmin } = useAdmin();
  const addOrUpdateLecturerModalRef = useRef<HTMLDialogElement>(null);
  const { openModal, closeModal } = useModal(addOrUpdateLecturerModalRef);

  return (
    <div className="mb-8 flex h-full w-full flex-col justify-between rounded-lg border bg-white p-6">
      <div className="mb-4">
        <LecturerProfile name={lecturer.name} image={lecturer.profile_url} />
      </div>
      <div className="flex flex-col gap-4">
        <CardInfo title="Bio">{lecturer.bio}</CardInfo>
        <CardInfo title="Organization">
          <p>{lecturer.organizations?.name}</p>
        </CardInfo>
        <CardInfo title="Themes">
          {lecturer?.themes?.map((theme, i) => {
            return (
              <div key={i} className="flex gap-1">
                <p>
                  {theme.name}
                  {i === lecturer.themes.length - 1 ? '' : ','}
                </p>
                <p>{''}</p>
              </div>
            );
          })}
        </CardInfo>
      </div>
      <div className="mt-auto flex flex-col justify-start gap-2">
        <Link
          className="flex justify-center"
          to={`/app/lecturers/${lecturer.id}`}
        >
          <button className="w-full rounded-lg border border-black px-6 py-3 transition-all hover:bg-green-200">
            View Workshops
          </button>
        </Link>
        <div className="mt-6 flex w-full justify-end">
          {isAdmin && (
            <AdminButton value="Update lecturer" onClick={openModal} />
          )}
        </div>
      </div>
      <Modal ref={addOrUpdateLecturerModalRef}>
        <AddOrupdateLecturerModal
          closeModal={closeModal}
          lecturer={lecturer}
          type="update"
        />
      </Modal>
    </div>
  );
}

export default LecturerCard;
