import React, { useState } from 'react'
import logo from '../../../frontend/src/assets/healthcare.png';

import { NavLink, useNavigate,  } from 'react-router-dom';
 
const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu ] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text=sm py-4 mb-5 border-b border-b-gray-400'>
        <img src={logo} alt='' className='h-12 ww-44 cursor-pointer'/>
        <ul className='hidden md:flex item-start gap-5 font-medium'>
        
            <NavLink to="/">
              <li className='py-1 '>HOME</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
            </NavLink>

            <NavLink to="/doctor">
              <li className='py-1 '>All DOCTOR</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
            </NavLink>

            <NavLink to="/about">
              <li className='py-1 '>ABOUT</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
            </NavLink>

            <NavLink to="/contact">
              <li className='py-1'>CONTACT</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
            </NavLink>
        </ul>
        
        <div className='flex items-center gap-4'>
            <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create account</button>
        </div>


    </div>
  )
}

export default Navbar