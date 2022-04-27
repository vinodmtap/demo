import { Box } from '@chakra-ui/react';
import React from 'react'
import TableData from '../TableData';
import NodalData from './NODAL_DATA.json';

const NodalPoint = () => {
    const data = [...NodalData]
    // const header = ["id", "company_name", "employee_name", "company_email", "pickup_address", "destination_address"]
    const dataPerPage = 8;
  return (
    <Box>
      <TableData body={data} dataPerPage={dataPerPage}/>
    </Box>
  )
}

export default NodalPoint