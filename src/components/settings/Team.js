import React from 'react'
import TeamData from './TEAM_DATA.json';
import TableData from '../TableData';
import { Box } from '@chakra-ui/react';

const Team = () => {
  const data = [...TeamData];
  // const header = ["id", "company_name", "team_name", "company_email", "city_name", "country_name"]
  const dataPerPage = 9;
  return (
    <Box>
      <TableData body={data} dataPerPage={dataPerPage} />
    </Box>
  )
}

export default Team