import { useParams } from 'react-router-dom';
import WorkshopsList from '../../components/Workshops/WorkshopsList';
import { useGetFilteredWorkshops } from '../../queries/workshopsQueries';
import useAllFilters from '../../hooks/useAllFilters';

import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import Aside from '../../components/UI/Sidebar/Aside';
import MainContent from '../../components/MainContent';
import AdminButton from '../../components/UI/AdminButton';

import { handleChangeFilter } from '../../utils/filterUtils';
import { Filters } from '../../types/data.types';
import useSidebar from '../../hooks/useSidebar';

function Workshops() {
  const [filters, setFilters] = useState<Filters>({
    difficulties: [],
    themes: [],
  });
  const { isAdmin } = useAdmin();
  const { isSidebarExpanded, toggleExpand } = useSidebar();
  const { lecturerId } = useParams();
  const { filteredWorkshops, isLoading } = useGetFilteredWorkshops(
    lecturerId,
    filters.difficulties,
    filters.themes,
  );
  const { themes, difficulties, isLoading: loadingFilteres } = useAllFilters();

  const handleFilterChange = (id: number, type: keyof Filters) => {
    handleChangeFilter(id, type, setFilters);
  };

  return (
    <div className="relative flex h-full">
      <Aside
        isSidebarExpanded={isSidebarExpanded}
        toggleExpand={toggleExpand}
        themes={themes}
        difficulties={difficulties}
        isLoading={loadingFilteres}
        onChangeFilter={handleFilterChange}
      />
      <MainContent isSidebarExpanded={isSidebarExpanded}>
        <div className="flex flex-col">
          <div className="flex h-20 w-full justify-end">
            {isAdmin && <AdminButton value="Add new workshop" />}
          </div>
          <WorkshopsList workshops={filteredWorkshops} isLoading={isLoading} />
        </div>
      </MainContent>
    </div>
  );
}

export default Workshops;
