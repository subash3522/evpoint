
import './App.css';
import Navbar from './Component/Pages/Navigarion/Navbar.js'
import { Routes, Route } from 'react-router-dom';
import NepalMap from './evpoint';
function App() {
  return (
    <>
   <Navbar/>
   <Routes>
   <Route path="/nepalmap" element={<NepalMap/>} />
   </Routes>
    </>
  );
}

export default App;

