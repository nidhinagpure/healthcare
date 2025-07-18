import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import Appointments from './pages/Appointments';
import MyAppointment from './pages/MyAppointment';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';
import Navbar from './componenets/Navbar';

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
        <Route path='/myappointment' element={<MyAppointment />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
     


    </div>
  )
}

export default App