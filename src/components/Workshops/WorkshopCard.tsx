import { useAdmin } from '../../context/AdminContext';
import { WorkshopType } from '../../types/data.types';
import CardInfo from '../CardInfo';
import AdminButton from '../UI/AdminButton';

type WorkshopProps = {
  workshop: WorkshopType;
};

function WorkshopCard({ workshop }: WorkshopProps) {
  const { isAdmin } = useAdmin();

  return (
    <div className="mb-8 flex h-fit flex-col rounded-lg border bg-white p-6">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <p className="font-base mb-8 w-fit border-r-2 pr-6 text-3xl">
          {workshop.name}
        </p>
        <div className="flex flex-col gap-4 pl-4">
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
            {isAdmin && <AdminButton value="Edit workshop" />}
            <button className="rounded-lg border border-black px-6 py-3 transition-all hover:bg-green-200">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;