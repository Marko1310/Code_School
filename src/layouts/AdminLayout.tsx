import NavButton from '../components/Shared/UI/NavButton';
import Modal from '../components/Shared/modals/Modal';
import AddOrUpdateWorkshopModal from '../components/Shared/modals/AddOrUpdateWorkshopModal';
import AdminButton from '../components/Shared/UI/AdminButton';
import AddOrUpdateLecturerModal from '../components/Shared/modals/AddOrUpdateLecturerModal';
import AddOrUpdateOrganizationModal from '../components/Shared/modals/AddOrUpdateOrganizationModal';
import useModal from '../hooks/useModal';
import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function AdminLayout() {
  const modalRefs = {
    workshops: useRef<HTMLDialogElement>(null),
    lecturers: useRef<HTMLDialogElement>(null),
    organizations: useRef<HTMLDialogElement>(null),
  };

  const { openModal: openWorkshopModal, closeModal: closeWorkshopModal } =
    useModal(modalRefs.workshops);
  const { openModal: openLecturerModal, closeModal: closeLecturerModal } =
    useModal(modalRefs.lecturers);
  const {
    openModal: openOrganizationModal,
    closeModal: closeOrganizationModal,
  } = useModal(modalRefs.organizations);

  const { pathname } = useLocation();

  const handleOpenModal = () => {
    if (pathname.includes('/app/admin/workshops')) {
      openWorkshopModal();
    } else if (pathname.includes('/app/admin/lecturers')) {
      openLecturerModal();
    } else if (pathname.includes('/app/admin/organizations')) {
      openOrganizationModal();
    }
  };

  return (
    <div className="bg-background-admin h-screen w-screen pt-4 text-text lg:p-8">
      <nav className="mb-8 flex w-full items-center justify-between rounded-md border border-border bg-foreground p-2">
        <div className="flex flex-1 md:gap-16 md:pl-6">
          <NavButton
            route="/app/admin/workshops"
            title="Workshops"
            colorize="text"
          />
          <NavButton
            route="/app/admin/lecturers"
            title="Lecturers"
            colorize="text"
          />
          <NavButton
            route="/app/admin/organizations"
            title="Organizations"
            colorize="text"
          />
        </div>
        <div>
          <AdminButton value="+Add" onClick={() => handleOpenModal()} />
        </div>
      </nav>
      <Outlet />
      <Modal ref={modalRefs.workshops}>
        <AddOrUpdateWorkshopModal closeModal={closeWorkshopModal} type="add" />
      </Modal>
      <Modal ref={modalRefs.lecturers}>
        <AddOrUpdateLecturerModal closeModal={closeLecturerModal} type="add" />
      </Modal>
      <Modal ref={modalRefs.organizations}>
        <AddOrUpdateOrganizationModal
          closeModal={closeOrganizationModal}
          type="add"
        />
      </Modal>
    </div>
  );
}

export default AdminLayout;
