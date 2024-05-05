import Loading from '../Shared/UI/Loading';
import LecturerCard from './LecturerCard';
import { LecturerType } from '../../types/data.types';

type lecturersListProps = {
  lecturers: LecturerType[] | null | undefined;
  isLoading: boolean;
};

function LecturersList({ lecturers, isLoading }: lecturersListProps) {
  {
    if (isLoading) {
      return <Loading />;
    } else if (lecturers?.length === 0) {
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <p className="text-2xl">No lecturers found.</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap">
          {lecturers?.map((lecturer) => {
            return (
              <div
                key={lecturer.id}
                className="mb-4 w-full lg:w-1/2 lg:px-4"
                style={{ display: 'flex' }}
              >
                <LecturerCard lecturer={lecturer} />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default LecturersList;
