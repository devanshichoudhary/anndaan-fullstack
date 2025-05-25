import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DonorForm from './pages/DonorForm';
import NGOForm from './pages/NGOForm';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonorForm />} />
        <Route path="/request" element={<NGOForm />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
