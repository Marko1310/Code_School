// import { useGetAllLecturers } from '../../queries/lecturersQueries';
import { useGetFilteredWorkshops } from '../../queries/workshopsQueries';
import Loading from '../UI/Loading';
import WorkshopCard from './WorkshopCard';
// import LecturerCard from './LecturerCard';

function WorkshopList() {
  const { allWorkshops, isLoading } = useGetFilteredWorkshops();

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-wrap">
        {allWorkshops?.map((workshop) => {
          return (
            <div key={workshop.id} className="mb-4 w-full px-4">
              <WorkshopCard workshop={workshop} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkshopList;
