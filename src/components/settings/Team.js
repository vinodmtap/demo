import React from 'react'
import TeamData from './TEAM_DATA.json';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  InputLeftAddon,
  InputGroup,
  Input,
  Box,
    } from '@chakra-ui/react'
import { useState } from 'react';

const Team = () => {
  const [data, setData] = useState(TeamData);
  const [order, setOrder] = useState("ASC");
  const [search, setSearch] = useState("");

  const sorting = (col) => {
    if(order === "ASC"){
      const sorted = [...data].sort((a,b)=>
       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }else if(order === "DSC"){
      const sorted = [...data].sort((a,b)=>
       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  }

  return (
    <Box>
      <InputGroup>
         <InputLeftAddon children="Search"/>
         <Input type="text" placeholder='search by letter'
           onChange={(e)=>setSearch(e.target.value)}
         />
      </InputGroup>
      <TableContainer>
        <Table variant='smooth'>
          <Thead>
            <Tr>
              <Th onClick={()=>sorting("id")}>ID</Th>
              <Th onClick={()=>sorting("company_name")}>Company Name</Th>
              <Th onClick={()=>sorting("team_name")}>Team Name</Th>
              <Th  onClick={()=>sorting("company_email")}>Email</Th>
              <Th onClick={()=>sorting("city_name")}>City</Th>
              <Th onClick={()=>sorting("country_name")}>Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.filter((val)=>{
              if(search === ""){
                return val;
              }else if(
                val.company_name.toLowerCase().includes(search.toLowerCase()) || 
                val.team_name.toLowerCase().includes(search.toLowerCase()) || 
                val.company_email.toLowerCase().includes(search.toLowerCase()) || 
                val.city_name.toLowerCase().includes(search.toLowerCase()) || 
                val.country_name.toLowerCase().includes(search.toLowerCase())
              ){
                return val;
              }
            }).map(data => {
              return (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.company_name}</Td>
                  <Td>{data.team_name}</Td>
                  <Td>{data.company_email}</Td>
                  <Td>{data.city_name}</Td>
                  <Td>{data.country_name}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Team