import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import Appointments from './pages/Appointments';
import MyAppointments from './pages/MyAppointment';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/doctor/:speciality' element={<Doctor />} />
        <Route path='/appointments/:docId' element={<Appointments />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/myProfile' element={<MyProfile />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer/>
     


    </div>
  )
}

export default App