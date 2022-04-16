import React from 'react'
import '../App.css'
import { Route, Routes } from 'react-router-dom'
import SettingsNav from './SettingsNav'
import Employee from './settings/Employee'
import Driver from './settings/Driver'
import Team from './settings/Team'
import FuelRates from './settings/FuelRates'
import NodalPoint from './settings/NodalPoint'
import Vehicle from './settings/Vehicle'
import Vendor from './settings/Vendor'

const Settings = () => {
  return (
    <div>
      <SettingsNav className='setting-nav'/>
      
       <Routes>
         <Route path='employee' element={<Employee/>}></Route>
         <Route path='driver' element={<Driver/>}></Route>
         <Route path='team' element={<Team/>}></Route>
         <Route path='fuelrates' element={<FuelRates/>}></Route>
         <Route path='nodalpoints' element={<NodalPoint/>}></Route>
         <Route path='vehicle' element={<Vehicle/>}></Route>
         <Route path='vendor' element={<Vendor/>}></Route>
       </Routes>
    </div>
  )
}

export default Settings