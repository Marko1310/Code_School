import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ApplicationLayout from './layouts/ApplicationLayout';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Lecturers from './pages/Lecturers';
import Admin from './pages/Admin';
import { AdminProvider } from './context/AdminContext';
import Protected from './pages/Protected';
import { QueryClient, QueryClientProvider } from 'react-query';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
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
              <Route
                path="admin"
                element={
                  <Protected>
                    <Admin />
                  </Protected>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AdminProvider>
  );
}

export default App;
