
import './App.css';
import Navbar from './Component/Pages/Navigarion/Navbar.js'
import Homepage from './Component/Pages/Navigarion/Homepage.js'
import Footer from './Component/Pages/Navigarion/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NepalMap from './evpoint';
function App() {
  return (
    <>
   <Navbar/>
   <Homepage/>
   <Router>
   <Routes>
   <Route path="/nepalmap" element={<NepalMap/>} />
   </Routes>
   </Router>
   <Footer/>

   
    </>
  );
}

export default App;

