import './App.css';
import Navbar from './Component/Pages/Navigarion/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import NepalMap from './evpoint';
import Home from './Component/Pages/HomePage/Home';

import Footer from './Component/Pages/Footer/footer.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/nepalmap" element={<NepalMap/>} />
  
        </Routes>
       
      </Router>
      <Footer/>
    </>
  );
}

export default App;
