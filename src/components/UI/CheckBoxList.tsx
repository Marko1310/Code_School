import {
  DifficultyType,
  OrganizationType,
  ThemeType,
} from '../../types/data.types';

type CheckBoxType = {
  items: ThemeType[] | OrganizationType[] | DifficultyType[];
};

function CheckBoxList({ items }: CheckBoxType) {
  return (
    <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 ">
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className="w-full rounded-t-lg border-b border-gray-200"
          >
            <div className="flex items-center ps-3">
              <input
                onClick={() => console.log(item.id)}
                type="checkbox"
                value={item.id}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 "
              />
              <label className="ms-2 w-full py-3 text-sm text-gray-900">
                {item.name}
              </label>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CheckBoxList;
