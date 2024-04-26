import { Tables } from '../../types/database.types';
import LecturerProfile from './LecturerProfile';

type LecturerProps = {
  lecturer: Tables<'lecturer_with_organization_and_themes_view'>;
};

function LecturerCard({ lecturer }: LecturerProps) {
  return (
    <div className="rounded-lg border bg-white p-3">
      <div className="mb-4">
        <LecturerProfile name={lecturer.name} />
      </div>
      <div className="flex flex-col gap-2">
        <p>Bio: </p>
        <div className="flex gap-1">
          <p className="font-semibold">Organization:</p>
          <div className="flex flex-wrap">
            <p>{lecturer.organizations}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Themes: </p>
          <div className="flex flex-wrap gap-1">
            {lecturer?.themes?.map((theme) => {
              return (
                <>
                  <p>{theme}</p>
                  <p>{''}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerCard;
