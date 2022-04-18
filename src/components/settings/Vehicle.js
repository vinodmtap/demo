import React from 'react'
import VehicleData from './VEHICLE_DATA.json';
import TableData from '../TableData';
import { Box } from '@chakra-ui/react';

const Vehicle = () => {
  const data = [...VehicleData]
  const header = ["id", "vehicle_brand", "vehicle_model", "driver_name", "driver_address"]

  return (
    <Box>
      <TableData body={data} header={header} />
    </Box>
  )
}

export default Vehicle