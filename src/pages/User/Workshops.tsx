import { useParams } from 'react-router-dom';
import WorkshopsList from '../../components/Workshops/WorkshopsList';
import { useGetFilteredWorkshops } from '../../queries/workshopsQueries';
import useAllFilters from '../../hooks/useAllFilters';

import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import Aside from '../../components/UI/Aside';
import MainContent from '../../components/MainContent';
import AdminButton from '../../components/UI/AdminButton';

import { handleChangeFilter } from '../../utils/filterUtils';
import { Filters } from '../../types/data.types';

function Workshops() {
  const { isAdmin } = useAdmin();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleExpand = function () {
    setIsSidebarExpanded((prevValue) => !prevValue);
  };

  const { lecturerId } = useParams();

  const [filters, setFilters] = useState<Filters>({
    difficulties: [],
    themes: [],
  });

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
            {isAdmin && <AdminButton value="Add new lecturer" />}
          </div>
          <WorkshopsList workshops={filteredWorkshops} isLoading={isLoading} />
        </div>
      </MainContent>
    </div>
  );
}

export default Workshops;
