import {
  DifficultyType,
  Filters,
  OrganizationType,
  ThemeType,
} from '../../../types/data.types';

type CheckBoxType = {
  label: string;
  items: ThemeType[] | OrganizationType[] | DifficultyType[];
  filterType: keyof Filters;
  onCheckboxChange: (themeId: number, type: keyof Filters) => void;
};

function CheckBoxList({
  label,
  items,
  filterType,
  onCheckboxChange,
}: CheckBoxType) {
  return (
    <>
      <h3 className="mb-4 font-semibold">{label}</h3>
      <ul className="w-48 rounded-lg border border-border bg-accent text-sm">
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className="w-full rounded-t-lg border-b border-border"
            >
              <div className="flex items-center ps-3">
                <input
                  onClick={() => onCheckboxChange(item.id, filterType)}
                  type="checkbox"
                  value={item.id}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
                />
                <label className="ms-2 w-full py-3 text-sm">{item.name}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CheckBoxList;
