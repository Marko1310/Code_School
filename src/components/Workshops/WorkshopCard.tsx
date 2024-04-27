import { WorkshopType } from '../../types/data.types';
import CardInfo from '../CardInfo';

type WorkshopProps = {
  workshop: WorkshopType;
};

function WorkshopCard({ workshop }: WorkshopProps) {
  return (
    <div className="rounded-lg border bg-white p-3">
      <p className="font-base mb-8 w-fit border-b-2 text-3xl">
        {workshop.title}
      </p>
      <div className="flex flex-col gap-4 pl-4">
        <CardInfo title="Difficulty">
          <p>{workshop.difficulties?.level}</p>
        </CardInfo>
        <CardInfo title="Themes">
          {workshop?.themes?.map((theme, i) => {
            return (
              <div key={i} className="flex gap-1">
                <p>{theme.name}</p>
                <p>{''}</p>
              </div>
            );
          })}
        </CardInfo>
        <CardInfo title="Lecturers">
          {workshop?.lecturers?.map((lecturer, i) => {
            return (
              <div key={i} className="flex gap-1">
                <p>{lecturer.name}</p>
                <p>{''}</p>
              </div>
            );
          })}
        </CardInfo>
      </div>
    </div>
  );
}

export default WorkshopCard;
