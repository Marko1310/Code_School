import { ReactNode } from 'react';
import Overlay from './UI/Overlay';

type MainContentProps = {
  isSidebarExpanded: boolean;
  children: ReactNode;
};

function MainContent({ isSidebarExpanded, children }: MainContentProps) {
  return (
    <>
      {isSidebarExpanded && <Overlay />}
      <div className="relative w-full overflow-y-auto border-2 pl-16 md:pl-60">
        <div className="p-2 lg:p-4">{children}</div>
      </div>
    </>
  );
}

export default MainContent;
