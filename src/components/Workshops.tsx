import Aside from './UI/Aside';
import MainContent from './MainContent';
import { useState } from 'react';

function Workshops() {
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
      {/* <Content isSidebarExpanded={isSidebarExpanded} /> */}
    </div>
  );
}

export default Workshops;
