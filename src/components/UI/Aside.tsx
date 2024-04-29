import {
  DifficultyType,
  OrganizationType,
  ThemeType,
} from '../../types/data.types';
import CheckBoxList from './CheckBoxList';
import Loading from './Loading';

type AsideProps = {
  isSidebarExpanded: boolean;
  toggleExpand: () => void;
  allThemes?: ThemeType[] | null;
  allOrganizations?: OrganizationType[] | null;
  allDifficulties?: DifficultyType[] | null;
  isLoading?: boolean;
};

function Aside({
  isSidebarExpanded,
  toggleExpand,
  allThemes,
  allOrganizations,
  allDifficulties,
  isLoading,
}: AsideProps) {
  return (
    <>
      <aside
        className={`absolute left-0 top-0 z-50 h-full p-4 ${isSidebarExpanded ? 'w-60' : 'w-16'} overflow-hidden bg-blue-200 transition-all duration-300 md:w-60`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col">
            <button className="md:hidden" onClick={toggleExpand}>
              Expand
            </button>
            <div className="flex flex-col gap-8">
              {allThemes && (
                <div>
                  <h3 className="mb-4 font-semibold text-gray-900">Themes:</h3>
                  <CheckBoxList items={allThemes} />
                </div>
              )}

              {allDifficulties && (
                <div>
                  <h3 className="mb-4 font-semibold text-gray-900">
                    Difficulty:
                  </h3>
                  <CheckBoxList items={allDifficulties} />
                </div>
              )}

              {allOrganizations && (
                <div>
                  <h3 className="mb-4 font-semibold text-gray-900">
                    Organizations:
                  </h3>
                  <CheckBoxList items={allOrganizations} />
                </div>
              )}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

export default Aside;
