import { Tables } from '../../types/database.types';
import LecturerProfile from './LecturerProfile';

type LecturerProps = {
  lecturer: Tables<'lecturer_with_organization_view'>;
};

function LecturerCard({ lecturer }: LecturerProps) {
  return (
    <div className="rounded-lg border bg-white p-3">
      <div className="flex flex-col items-center">
        <LecturerProfile />
        <p>{lecturer.name}</p>
        <p>{lecturer.organization_name}</p>
      </div>
    </div>
  );
}

export default LecturerCard;
