import React from 'react'
import MockData from './MOCK_DATA.json'
import TableData from '../TableData';
import { Box } from '@chakra-ui/react';

const Employee = () => {
  const header = ["id", "first_name", "last_name", "email", "gender", "city"]
  const data = [...MockData];
  return (
    <Box>
      <TableData body={data} header={header}/>
    </Box>
  )
}

export default Employee