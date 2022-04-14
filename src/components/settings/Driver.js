import React from 'react'
import MockData from './MOCK_DATA.json'
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
import { useState } from 'react'

const Driver = () => {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");
  const [search, setSearch] = useState("");
  // console.log(data);

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
  console.log(search);
  return (
    <Box>
      <InputGroup>
         <InputLeftAddon children="Search"/>
         <Input type="text" placeholder='seract by letter'
           onChange={(e)=>setSearch(e.target.value)}
         />
      </InputGroup>
      <TableContainer>
        <Table variant='smooth'>
          <Thead>
            <Tr>
              <Th onClick={()=>sorting("id")}>ID</Th>
              <Th onClick={()=>sorting("first_name")}>First Name</Th>
              <Th onClick={()=>sorting("last_name")}>Last Name</Th>
              <Th onClick={()=>sorting("gender")}>Gender</Th>
              <Th  onClick={()=>sorting("email")}>Email</Th>
              <Th onClick={()=>sorting("city")}>City</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.filter((val)=>{
              if(search === ""){
                return val;
              }else if(
                val.first_name.toLowerCase().includes(search.toLowerCase()) || 
                val.last_name.toLowerCase().includes(search.toLowerCase()) || 
                val.gender.toLowerCase().includes(search.toLowerCase()) || 
                val.email.toLowerCase().includes(search.toLowerCase()) || 
                val.city.toLowerCase().includes(search.toLowerCase())
              ){
                return val;
              }
            }).map(data => {
              return (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.first_name}</Td>
                  <Td>{data.last_name}</Td>
                  <Td>{data.gender}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.city}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Driver



        // <Tr>
        //   <Td>01</Td>
        //   <Td>ram</Td>
        //   <Td isNumeric>Male</Td>
        // </Tr>