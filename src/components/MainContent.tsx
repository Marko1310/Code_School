import { ReactNode } from 'react';
import Overlay from './UI/Overlay';
import useIsMobile from '../hooks/useIsMobile';

type MainContentProps = {
  isSidebarExpanded: boolean;
  children: ReactNode;
};

function MainContent({ isSidebarExpanded, children }: MainContentProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {isSidebarExpanded && isMobile && <Overlay />}
      <div className="relative w-full overflow-y-auto pl-16 md:pl-60">
        <div className="p-2 lg:p-4">{children}</div>
      </div>
    </>
  );
}

export default MainContent;
