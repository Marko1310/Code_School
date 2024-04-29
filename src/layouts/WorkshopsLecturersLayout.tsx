import { ReactNode, useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import Aside from '../components/UI/Aside';
import MainContent from '../components/MainContent';
import AdminButton from '../components/UI/AdminButton';

function WorkshopsLecturersLayout({ children }: { children: ReactNode }) {
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
          {children}
        </div>
      </MainContent>
    </div>
  );
}

export default WorkshopsLecturersLayout;
