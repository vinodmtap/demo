import React from 'react'
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
  } from '@chakra-ui/react'


const Settings = () => {
  return (
    <div>
<TableContainer>
    <Table variant='smooth'>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th isNumeric>Gender</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>01</Td>
          <Td>ram</Td>
          <Td isNumeric>Male</Td>
        </Tr>
        <Tr>
          <Td>02</Td>
          <Td>anil</Td>
          <Td isNumeric>Male</Td>
        </Tr>
        <Tr>
          <Td>03</Td>
          <Td>ajay</Td>
          <Td isNumeric>Male</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
       
    </div>
  )
}

export default Settings