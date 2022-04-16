import React from 'react'
import TeamData from './TEAM_DATA.json';
import TableData from '../TableData';
import { Box } from '@chakra-ui/react';

const Team = () => {
  const data = [...TeamData];
  const header = ["id", "company_name", "team_name", "company_email", "city_name", "country_name"]
  return (
    <Box>
      <TableData body={data} header={header} />
    </Box>
  )
}

export default Team