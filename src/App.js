import './App.css';
import Navbar from './Component/Pages/Navigarion/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import NepalMap from './evpoint';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/nepalmap" element={<NepalMap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
