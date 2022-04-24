import { SettingsIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import HomeIcon from '@mui/icons-material/Home';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddCardIcon from '@mui/icons-material/AddCard';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';


const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink to='/'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <HomeIcon />
          <Box>Home</Box>
        </Flex>
      </NavLink>

      <NavLink to='/trips'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <AirlineStopsIcon />
          <Box>Trips</Box>
        </Flex>
      </NavLink>

      <NavLink to='/specialtrips'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <AirlineStopsIcon />
          <Box>specialtrips</Box>
        </Flex>
      </NavLink>

      <NavLink to='/livemap'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <AddLocationAltIcon />
          <Box>livemap</Box>
        </Flex>
      </NavLink>

      <NavLink to='/reports'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <AssessmentIcon />
          <Box>Reports</Box>
        </Flex>
      </NavLink>

      <NavLink to='/refund'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <AddCardIcon />
          <Box>Refund</Box>
        </Flex>
      </NavLink>

      <NavLink to='/alert'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <FmdBadIcon />
          <Box>Alert</Box>
        </Flex>
      </NavLink>

      <NavLink to='/roster'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <AllInclusiveIcon />
          <Box>Roster</Box>
        </Flex>
      </NavLink>

      <NavLink to='/settings'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <SettingsIcon h={6} w={6} />
          <Box>Settings</Box>
        </Flex>
      </NavLink>

      <NavLink to='/tools'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <ConstructionIcon />
          <Box>Tools</Box>
        </Flex>
      </NavLink>

      <NavLink to='/lounge'>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <DescriptionIcon />
          <Box>Lounge</Box>
        </Flex>
      </NavLink>
    </nav>
  )
}

export default Navbar