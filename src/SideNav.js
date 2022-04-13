import React from 'react'
import Alert from './components/Alert'
import Home from './components/Home'
import LiveMap from './components/LiveMap'
import Lounge from './components/Lounge'
import Refund from './components/Refund'
import Reports from './components/Reports'
import Roster from './components/Roster'
import SpecialTrips from './components/SpecialTrips'
import Tools from './components/Tools'
import Trips from './components/Trips'

const SideNav = () => {
  return (
    <div>
        <Alert/>
        <Home/>
        <LiveMap/>
        <Lounge/>
        <Refund/>
        <Reports/>
        <Roster/>
        <SpecialTrips/>
        <Tools/>
        <Trips/>
    </div>
  )
}

export default SideNav