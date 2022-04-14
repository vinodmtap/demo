import React from 'react'
import NodalData from './NODAL_DATA.json';
import { useState } from 'react';
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

const NodalPoint = () => {
  const [data, setData] = useState(NodalData);
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
              <Th onClick={()=>sorting("employee_name")}>Employee Name</Th>
              <Th  onClick={()=>sorting("company_email")}>Company Email</Th>
              <Th onClick={()=>sorting("pickup_address")}>Pickup Nodalpoint</Th>
              <Th onClick={()=>sorting("destination_address")}>Drop Nodalpoint</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.filter((val)=>{
              if(search === ""){
                return val;
              }else if(
                val.company_name.toLowerCase().includes(search.toLowerCase()) || 
                val.employee_name.toLowerCase().includes(search.toLowerCase()) || 
                val.company_email.toLowerCase().includes(search.toLowerCase()) || 
                val.pickup_address.toLowerCase().includes(search.toLowerCase()) || 
                val.destination_address.toLowerCase().includes(search.toLowerCase())
              ){
                return val;
              }
            }).map(data => {
              return (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.company_name}</Td>
                  <Td>{data.employee_name}</Td>
                  <Td>{data.company_email}</Td>
                  <Td>{data.pickup_address}</Td>
                  <Td>{data.destination_address}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default NodalPoint