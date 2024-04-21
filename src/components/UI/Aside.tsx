type AsideProps = {
  isSidebarExpanded: boolean;
  toggleExpand: () => void;
};

function Aside({ isSidebarExpanded, toggleExpand }: AsideProps) {
  return (
    <aside
      className={`absolute left-0 top-0 z-50 h-full ${isSidebarExpanded ? 'w-60' : 'w-16'} overflow-hidden bg-blue-200 transition-all duration-300 md:w-60`}
    >
      <button className="md:hidden" onClick={toggleExpand}>
        Expand
      </button>
      <div className="hidden md:block">Aside</div>
    </aside>
  );
}

export default Aside;
