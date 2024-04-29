import { useParams } from 'react-router-dom';
import WorkshopsList from '../components/Workshops/WorkshopsList';
import { useGetFilteredWorkshops } from '../queries/workshopsQueries';
import useAllFilteres from '../hooks/useAllFilteres';

import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import Aside from '../components/UI/Aside';
import MainContent from '../components/MainContent';
import AdminButton from '../components/UI/AdminButton';

function Workshops() {
  const { isAdmin } = useAdmin();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleExpand = function () {
    setIsSidebarExpanded((prevValue) => !prevValue);
  };

  const { lecturerId } = useParams();

  const [filters, setFilters] = useState({
    difficulty: undefined,
    themes: [],
  });

  const { filteredWorkshops, isLoading } = useGetFilteredWorkshops(
    lecturerId,
    filters.difficulty,
    filters.themes,
  );

  const {
    allThemes,
    allDifficulties,
    isLoading: loadingFilteres,
  } = useAllFilteres();

  return (
    <div className="relative flex h-full">
      <Aside
        isSidebarExpanded={isSidebarExpanded}
        toggleExpand={toggleExpand}
        allThemes={allThemes}
        allDifficulties={allDifficulties}
        isLoading={loadingFilteres}
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
