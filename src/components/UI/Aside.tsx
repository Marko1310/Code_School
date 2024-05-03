import useIsMobile from '../../hooks/useIsMobile';
import {
  DifficultyType,
  Filters,
  OrganizationType,
  ThemeType,
} from '../../types/data.types';
import CheckBoxList from './CheckBoxList';
import Loading from './Loading';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

type AsideProps = {
  isSidebarExpanded: boolean;
  toggleExpand: () => void;
  themes?: ThemeType[] | null;
  organizations?: OrganizationType[] | null;
  difficulties?: DifficultyType[] | null;
  isLoading?: boolean;
  onChangeFilter: (themeId: number, type: keyof Filters) => void;
};

function Aside({
  isSidebarExpanded,
  toggleExpand,
  themes,
  organizations,
  difficulties,
  isLoading,
  onChangeFilter,
}: AsideProps) {
  const isMobile = useIsMobile();

  return (
    <>
      <aside
        className={`absolute left-0 top-0 z-50 h-full p-4 ${isSidebarExpanded ? 'w-60' : 'w-16'} overflow-hidden bg-blue-200 transition-all duration-300 md:w-60`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col">
            <div className="flex w-full justify-end">
              <button
                className={`${!isMobile ? 'hidden' : 'block'}`}
                onClick={toggleExpand}
              >
                {isSidebarExpanded ? (
                  <KeyboardArrowLeftIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}
              </button>
            </div>
            <div
              className={`${!isSidebarExpanded ? 'hidden' : 'flex flex-col'} gap-10`}
            >
              {themes && (
                <div>
                  <CheckBoxList
                    label="Themes:"
                    items={themes}
                    filterType="themes"
                    onCheckboxChange={onChangeFilter}
                  />
                </div>
              )}

              {difficulties && (
                <div>
                  <CheckBoxList
                    label="Difficulty:"
                    items={difficulties}
                    filterType="difficulties"
                    onCheckboxChange={onChangeFilter}
                  />
                </div>
              )}
              {organizations && (
                <div>
                  <CheckBoxList
                    label="Organizations:"
                    items={organizations}
                    filterType="organizations"
                    onCheckboxChange={onChangeFilter}
                  />
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
