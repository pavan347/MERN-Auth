import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Sidebar = () => {

  const { token } =useContext(AppContext)

  return (
    <div className='min-h-screen bg-white border-r'>
    <ul className='text-[#515151] mt-5'>

        <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-48 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
          
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>
        <NavLink to={'/all-users'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
          
          <p className='hidden md:block'>Users</p>
        </NavLink>
        <NavLink to={'/log-history'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9  cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
         
          <p className='hidden md:block'>Log History</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar