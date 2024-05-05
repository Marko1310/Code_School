import {
  DifficultyType,
  Filters,
  OrganizationType,
  ThemeType,
} from '../../../../types/data.types';
import CheckBoxList from '../CheckBoxList';

type SidebarFiltersProps = {
  isSidebarExpanded: boolean;
  themes?: ThemeType[] | null;
  organizations?: OrganizationType[] | null;
  difficulties?: DifficultyType[] | null;
  onChangeFilter: (themeId: number, type: keyof Filters) => void;
};

function SidebarFilters({
  isSidebarExpanded,
  themes,
  difficulties,
  organizations,
  onChangeFilter,
}: SidebarFiltersProps) {
  return (
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
  );
}

export default SidebarFilters;
