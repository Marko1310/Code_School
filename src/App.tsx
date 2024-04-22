import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Application from './pages/Application';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="app" element={<Application />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
