import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

const LiveMapNav = () => {
  return (
    <nav>
        <NavLink to='driver'>Driver</NavLink>
        <NavLink to='team'>Team</NavLink>
    </nav>
  )
}

export default LiveMapNav