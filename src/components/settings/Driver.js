import { Box } from '@chakra-ui/react';
import React from 'react'
import TableData from '../TableData';
import MockData from './MOCK_DATA.json'

const Driver = () => {
  const data = [...MockData]
  // const header = ["id", "first_name", "last_name", "email", "gender", "city"];
  const dataPerPage = 6;
  return (
    <Box>
      <TableData body={data} dataPerPage={dataPerPage} />
    </Box>
  )
}

export default Driver;