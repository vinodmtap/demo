import { Box } from '@chakra-ui/react';
import React from 'react'
import TableData from '../TableData';
import MockData from './MOCK_DATA.json'

const Driver = () => {
  const data = [...MockData]
  const header = ["id", "first_name", "last_name", "email", "gender", "city"];
  return (
    <Box>
      <TableData body={data} header={header} />
    </Box>
  )
}

export default Driver;