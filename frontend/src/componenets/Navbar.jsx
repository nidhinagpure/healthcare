import React, { useState } from 'react';
import logo from "../assets/healthcare.png";
import dropdown_icon from '../assets/dropdown_icon.svg';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png'

import nidhi from '../assets/nidhi.jpg'

import { NavLink, useNavigate } from 'react-router-dom';
 
const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu ] = useState(true);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text=sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} src={logo} alt='' className='h-12 ww-44 cursor-pointer'/>
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

          {
             token 
             ?<div className='flex item-center gap-2 cursor-pointer group relative' >
              <img className='w-8 rounded-full' src={nidhi} alt=''/>
              <img className='w-2.5'src={dropdown_icon}/>
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block' >
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('/myprofile')} className='hover:text-black cursor-pointer '>My Profile</p>
                <p onClick={()=>navigate('/myappointments')} className='hover:text-black cursor-pointer '>My Appointments</p>
                <p  onClick={()=>setToken(false)}className='hover:text-black cursor-pointer '>Logout</p>
                </div>
              </div>
             </div>
             :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create account</button>
          }
          <img onClick={()=>setShowMenu(true)} className=' w-6 md:hidden'src={menu_icon} />
          <div className={`${showMenu ? 'fixed w-full': 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300`}>
            <div className='flex item-center justify-between'>
              <img className='w-14' src={logo}/>
              <img className='w-7' onClick={()=>setShowMenu(false)}src={cross_icon}/>

            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
             <NavLink  className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to={'/'}>HOME</NavLink>
              <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)}  to={'/doctor'}>ALL DOCTORS</NavLink>

             <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)}  to={'/about'}>ABOUTS</NavLink>

             <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)}  to={'/contact'}>CONTACT</NavLink>

            </ul>
          </div>
        </div>


    </div>
  )
}

export default Navbar