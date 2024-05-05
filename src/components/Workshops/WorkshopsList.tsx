import { WorkshopType } from '../../types/data.types';
import Loading from '../Shared/UI/Loading';
import WorkshopCard from './WorkshopCard';

type workshopsListProps = {
  workshops: WorkshopType[] | null | undefined;
  isLoading: boolean;
};

function WorkshopList({ workshops, isLoading }: workshopsListProps) {
  {
    if (isLoading) {
      return <Loading />;
    } else if (workshops?.length === 0) {
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <p className="text-2xl">No workshops found.</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap">
          {workshops?.map((workshop) => {
            return (
              <div key={workshop.id} className="mb-4 w-full lg:px-4">
                <WorkshopCard workshop={workshop} />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default WorkshopList;
