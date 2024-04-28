import { useAdmin } from '../../context/AdminContext';
import MainContent from '../MainContent';
import AdminButton from '../UI/AdminButton';
import Aside from '../UI/Aside';
import { useState } from 'react';
import WorkshopsList from './WorkshopsList';

function Workshops() {
  const { isAdmin } = useAdmin();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleExpand = function () {
    setIsSidebarExpanded((prevValue) => !prevValue);
  };

  return (
    <div className="relative flex h-full">
      <Aside
        isSidebarExpanded={isSidebarExpanded}
        toggleExpand={toggleExpand}
      />
      <MainContent isSidebarExpanded={isSidebarExpanded}>
        <div className="flex flex-col">
          <div className="flex h-20 w-full justify-end">
            {isAdmin && <AdminButton value="Add new workshop" />}
          </div>
          <WorkshopsList />
        </div>
      </MainContent>
    </div>
  );
}

export default Workshops;
