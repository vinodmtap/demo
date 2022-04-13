import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/trips'>Trips</NavLink>
        <NavLink to='/specialtrips'>SpecialTrips</NavLink>
        <NavLink to='/livemap'>LiveMap</NavLink>
        <NavLink to='/reports'>Reports</NavLink>
        <NavLink to='/refund'>Refund</NavLink>
        <NavLink to='/alert'>Alert</NavLink>
        <NavLink to='/roster'>Roster</NavLink>
        <NavLink to='/settings'>Settings</NavLink>
        <NavLink to='/tools'>Tools</NavLink>
        <NavLink to='/lounge'>Lounge</NavLink>
    </nav>
  )
}

export default Navbar