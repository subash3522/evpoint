import './App.css';
import Navbar from './Component/Pages/Navigarion/Navbar.js'
import Homepage from './Component/Pages/Navigarion/Homepage.js';
import Footer from './Component/Pages/Navigarion/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NepalMap from './evpoint';
import Features from './Component/Pages/Navigarion/Features';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/nepalmap" element={<NepalMap />} />
        <Route path="/appointment" element={<Features />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
