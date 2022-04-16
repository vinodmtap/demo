import React from 'react'
import MockData from './MOCK_DATA.json'
import TableData from '../TableData';


const Vendor = () => {
  const header = ["id", "first_name", "last_name", "email", "gender", "city"]
  const data = [...MockData];
  return (
    <>
    <TableData body={data} header={header}/>
    </>
  )
}

export default Vendor