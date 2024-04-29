import { WorkshopType } from '../../types/data.types';
import Loading from '../UI/Loading';
import WorkshopCard from './WorkshopCard';

type workshopsListProps = {
  workshops: WorkshopType[] | null | undefined;
  isLoading: boolean;
};

function WorkshopList({ workshops, isLoading }: workshopsListProps) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {workshops?.map((workshop) => {
            return (
              <div key={workshop.id} className="mb-4 w-full px-4">
                <WorkshopCard workshop={workshop} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default WorkshopList;
