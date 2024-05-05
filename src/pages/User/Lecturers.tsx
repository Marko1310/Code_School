import { useRef, useState } from 'react';
import LecturersList from '../../components/Lecturers/LecturersList';
import { useAdmin } from '../../context/AdminContext';
import { Filters } from '../../types/data.types';
import useAllFilters from '../../hooks/useAllFilters';
import { handleChangeFilter } from '../../utils/filterUtils';
import Aside from '../../components/UI/Sidebar/Aside';
import MainContent from '../../components/MainContent';
import AdminButton from '../../components/UI/AdminButton';
import { useGeFilteredlLecturers } from '../../queries/lecturersQueries';
import useSidebar from '../../hooks/useSidebar';
import Modal from '../../components/Shared/modals/Modal';
import useModal from '../../hooks/useModal';
import AddOrupdateLecturerModal from '../../components/Shared/modals/AddOrUpdateLecturerModal';

function Lecturers() {
  const [filters, setFilters] = useState<Filters>({
    organizations: [],
    themes: [],
  });
  const { isAdmin } = useAdmin();
  const { isSidebarExpanded, toggleExpand } = useSidebar();
  const { filteredLecturers, isLoading } = useGeFilteredlLecturers(
    filters.organizations,
    filters.themes,
  );
  const { themes, organizations, isLoading: loadingFilteres } = useAllFilters();

  const handleFilterChange = (id: number, type: keyof Filters) => {
    handleChangeFilter(id, type, setFilters);
  };

  const addOrUpdateLecturerModalRef = useRef<HTMLDialogElement>(null);
  const { openModal, closeModal } = useModal(addOrUpdateLecturerModalRef);

  return (
    <div className="relative flex h-full">
      <Aside
        isSidebarExpanded={isSidebarExpanded}
        toggleExpand={toggleExpand}
        themes={themes}
        organizations={organizations}
        isLoading={loadingFilteres}
        onChangeFilter={handleFilterChange}
      />
      <MainContent isSidebarExpanded={isSidebarExpanded}>
        <div className="flex flex-col">
          <div className="flex h-20 w-full justify-end">
            {isAdmin && (
              <AdminButton value="Add lecturer" onClick={openModal} />
            )}
          </div>
          <LecturersList lecturers={filteredLecturers} isLoading={isLoading} />
        </div>
        <Modal ref={addOrUpdateLecturerModalRef}>
          <AddOrupdateLecturerModal closeModal={closeModal} type="add" />
        </Modal>
      </MainContent>
    </div>
  );
}

export default Lecturers;
