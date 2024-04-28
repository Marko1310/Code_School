import { useAdmin } from '../../context/AdminContext';
import { WorkshopType } from '../../types/data.types';
import CardInfo from '../CardInfo';
import AddNewButton from '../UI/AddNewButton';

type WorkshopProps = {
  workshop: WorkshopType;
};

function WorkshopCard({ workshop }: WorkshopProps) {
  const { isAdmin } = useAdmin();

  return (
    <div className="mb-8 flex flex-col rounded-lg border bg-white p-3">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <p className="font-base mb-8 h-fit w-fit border-b-2 text-3xl">
          {workshop.title}
        </p>
        <div className="flex flex-col gap-4 pl-4">
          <CardInfo title="Description">
            <p>{workshop.description}</p>
          </CardInfo>
          <CardInfo title="Difficulty">
            <p>{workshop.difficulties?.level}</p>
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
          <div className="mt-6 flex justify-start gap-2">
            <button className="rounded-lg border border-black px-6 py-3 transition-all hover:bg-green-200">
              Apply
            </button>
            {isAdmin && <AddNewButton value="Edit workshop" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
