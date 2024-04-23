import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Application from './pages/Application';
import Home from './components/Home';
import Workshops from './components/Workshops';
import Lecturers from './components/Lecturers';
import Admin from './components/Admin';
import { AdminProvider } from './context/AdminContext';
import Protected from './pages/Protected';

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="app" element={<Application />}>
            <Route index element={<Navigate to="workshops" />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="lecturers" element={<Lecturers />} />

            <Route
              path="admin"
              element={
                <Protected>
                  <Admin />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
