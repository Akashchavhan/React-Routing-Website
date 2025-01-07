import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Expedition from './Components/Expedition';
import Countries from './Components/Countries';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Expedition" element={<Expedition />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
