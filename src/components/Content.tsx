import Overlay from './UI/Overlay';

type ContentProps = {
  isSidebarExpanded: boolean;
};

function Content({ isSidebarExpanded }: ContentProps) {
  return (
    <>
      {isSidebarExpanded && <Overlay />}
      <div className="relative z-0 flex-1 pl-16 md:pl-60">
        Main content
        <button>click</button>
      </div>
    </>
  );
}

export default Content;
