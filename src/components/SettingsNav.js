import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const SettingsNav = () => {
  return (
    <nav className='setting-nav'>
        <NavLink to='employee'>Employee</NavLink>
        <NavLink to='driver'>Driver</NavLink>
         <NavLink to='team'>Team</NavLink>
         <NavLink to='fuelrates'>FuelRates</NavLink>
         <NavLink to='nodalpoints'>NodalPoint</NavLink>
         <NavLink to='vehicle'>Vehicle</NavLink>
         <NavLink to='vendor'>Vendor</NavLink>
    </nav>
  )
}

export default SettingsNav