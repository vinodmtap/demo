import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Driver from './settings/Driver'
import Team from './settings/Team'
import LiveMapNav from '../LiveMapNav'

const LiveMap = () => {
  return (
    <div>
      <LiveMapNav/>
      <Routes>
        <Route path='driver' element={<Driver/>}></Route>
        <Route path='team' element={<Team/>} ></Route>
      </Routes>
    </div>
  )
}

export default LiveMap