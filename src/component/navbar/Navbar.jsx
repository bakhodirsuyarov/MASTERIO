import React from 'react'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'
import { PiMoon } from 'react-icons/pi'
import { VscBellDot } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import User from '../../assets/images/wBadge.png'

function Navbar() {
  return (
    <nav>
      <div className='nav_left'>
        <button className='btn_icon'><FaSearch className='icon'/></button>
        <NavLink to={'/login'}>Magazin</NavLink>
      </div>
      {/* ----------- */}
      <div className='nav_right'>
        <button className='btn_icon'><PiMoon className='icon'/></button>
        <button className='btn_icon'><VscBellDot className='icon'/></button>
        <img src={User} alt="" />   
      </div>
    </nav>
  )
}
export default Navbar
