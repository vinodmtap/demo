import React from 'react'
import VehicleData from './VEHICLE_DATA.json';
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

const Vehicle = () => {
  const [data, setData] = useState(VehicleData);
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
              <Th onClick={()=>sorting("vehicle_brand")}>Vehicle Brand</Th>
              <Th onClick={()=>sorting("vehicle_model")}>Vehicle Model</Th>
              <Th onClick={()=>sorting("driver_name")}>Driver Name</Th>
              <Th  onClick={()=>sorting("driver_address")}>Driver Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.filter((val)=>{
              if(search === ""){
                return val;
              }else if(
                val.vehicle_brand.toLowerCase().includes(search.toLowerCase()) || 
                val.vehicle_model.toLowerCase().includes(search.toLowerCase()) || 
                val.driver_name.toLowerCase().includes(search.toLowerCase()) || 
                val.driver_address.toLowerCase().includes(search.toLowerCase())
              ){
                return val;
              }
            }).map(data => {
              return (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.vehicle_brand}</Td>
                  <Td>{data.vehicle_model}</Td>
                  <Td>{data.driver_name}</Td>
                  <Td>{data.driver_address}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Vehicle