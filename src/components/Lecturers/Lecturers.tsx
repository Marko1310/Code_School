import Aside from '../UI/Aside';
import MainContent from '../MainContent';
import { useState } from 'react';
import LecturersList from './LecturersList';
import AdminButton from '../UI/AdminButton';
import { useAdmin } from '../../context/AdminContext';

function Lecturers() {
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
            {isAdmin && <AdminButton value="Add new lecturer" />}
          </div>
          <LecturersList />
        </div>
      </MainContent>
    </div>
  );
}

export default Lecturers;
