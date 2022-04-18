import './App.css';
import Alert from './components/Alert';
import Home from './components/Home';
import Trips from './components/Trips';
import SpecialTrips from './components/SpecialTrips';
import LiveMap from './components/LiveMap';
import Reports from './components/Reports';
import Refund from './components/Refund';
import Roster from './components/Roster';
import Tools from './components/Tools';
import Lounge from './components/Lounge';
import Settings from './components/Settings';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Driver from './components/settings/Driver'
import Employee from './components/settings/Employee';
import Team from './components/settings/Team';
import FuelRates from './components/settings/FuelRates';
import NodalPoint from './components/settings/NodalPoint';
import Vehicle from './components/settings/Vehicle';
import Vendor from './components/settings/Vendor';

function App() {
  return (
    <div className='main'>
      <Navbar className='nav-bar' />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='trips' element={<Trips />}></Route>
        <Route path='specialtrips' element={<SpecialTrips />}></Route>
        <Route path='livemap' element={<LiveMap />}>
          <Route path='driver' element={<Driver />}></Route>
          <Route path='team' element={<Team />} ></Route>
          {/* <Route path='team' element={<Team />} ></Route> */}
        </Route>
        <Route path='reports' element={<Reports />}></Route>
        <Route path='refund' element={<Refund />}></Route>
        <Route path='roster' element={<Roster />}></Route>
        <Route path='tools' element={<Tools />}></Route>
        <Route path='lounge' element={<Lounge />}></Route>
        <Route path='alert' element={<Alert />}></Route>
        <Route path='settings' element={<Settings />}>
          <Route path='employee' element={<Employee />}></Route>
          <Route path='driver' element={<Driver />}></Route>
          <Route path='team' element={<Team />}></Route>
          <Route path='fuelrates' element={<FuelRates />}></Route>
          <Route path='nodalpoints' element={<NodalPoint />}></Route>
          <Route path='vehicle' element={<Vehicle />}></Route>
          <Route path='vendor' element={<Vendor />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
