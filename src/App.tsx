import ApplicationLayout from './layouts/ApplicationLayout';
import Home from './pages/User/Home';
import Workshops from './pages/User/Workshops';
import Lecturers from './pages/User/Lecturers';
import NotFound from './pages/User/NotFound';
import ProtectedRoute from './pages/Admin/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import AdminWorkshops from './pages/Admin/workshops/AdminWorkshops';
import AdminLecturers from './pages/Admin/lecturers/AdminLecturers';
import AdminOrganizations from './pages/Admin/organizations/AdminOrganizations';
import Notifications from './components/Shared/Notifications';
import { AdminProvider } from './context/AdminContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <AdminProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="app" element={<ApplicationLayout />}>
                <Route index element={<Navigate to="workshops" />} />
                <Route path="workshops" element={<Workshops />} />
                <Route path="lecturers">
                  <Route path=":lecturerId" element={<Workshops />} />
                  <Route index element={<Lecturers />} />
                </Route>
                <Route path="admin" element={<AdminLayout />}>
                  <Route element={<ProtectedRoute />}>
                    <Route index element={<Navigate to="workshops" />} />
                    <Route path="workshops" element={<AdminWorkshops />} />
                    <Route
                      path="lecturers"
                      index
                      element={<AdminLecturers />}
                    />
                    <Route
                      path="organizations"
                      index
                      element={<AdminOrganizations />}
                    />
                  </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Notifications />
        </QueryClientProvider>
      </AdminProvider>
    </DarkModeProvider>
  );
}

export default App;
