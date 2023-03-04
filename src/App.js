import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer'
import Signup from './components/Signup';
import Login from './components/Login'
import Contact from './components/Contact';
import Doctor from './components/Doctor';
import Pharmacy from './components/Pharmacy';
import Hospital from './components/Hospital';

function App() {
  return (
    <>

      <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Doctor" element={<Doctor/>}></Route>
          <Route path="/Pharmacy" element={<Pharmacy/>}></Route>
          <Route path="/Hospital" element={<Hospital/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
