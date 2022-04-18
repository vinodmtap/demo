import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    InputLeftAddon,
    InputGroup,
    Input,
    Box,
    TableContainer,
} from '@chakra-ui/react'
import { useState } from 'react';
import TablePagination from './TablePagination';

const TableData = (props) => {
    const [data, setData] = useState(props.body);
    // const[head, setHead] = useState(props.header);
    const [order, setOrder] = useState("ASC");
    const [search, setSearch] = useState("");
    const head = props.header;
    const [showPerPage, setShowPerPage] = useState(8);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })

    const onPaginationChange = (start, end) => {
        setPagination({
            start: start,
            end: end
        })
    }

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC");
        } else if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC");
        }
    }
    //   console.log(Object.keys(data[0]).map(x=>x));
    return (
        <Box>
            <Box>
                <InputGroup>
                    <InputLeftAddon children="Search" />
                    <Input type="text" placeholder='search by letter'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </InputGroup>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                {head.map((head) => <Th key={Math.random()} onClick={() => sorting(head)}>{head}</Th>)}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.slice(pagination.start, pagination.end).filter((val) => {
                                if (search === "") {
                                    return val;
                                } else if (
                                    (val.first_name && val.first_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.last_name && val.last_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.gender && val.gender.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.email && val.email.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.city && val.city.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.company_name && val.company_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.team_name && val.team_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.company_email && val.company_email.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.city_name && val.city_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.country_name && val.country_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.employee_name && val.employee_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.pickup_address && val.pickup_address.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.destination_address && val.destination_address.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.vehicle_brand && val.vehicle_brand.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.vehicle_model && val.vehicle_model.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.driver_name && val.driver_name.toLowerCase().includes(search.toLowerCase())) ||
                                    (val.driver_address && val.driver_address.toLowerCase().includes(search.toLowerCase()))
                                ) {
                                    return val;
                                }
                            }).map(data => {
                                return (
                                    <Tr key={data.id}>
                                        {data.id && <Td>{data.id}</Td>}
                                        {data.company_name && <Td>{data.company_name}</Td>}
                                        {data.employee_name && <Td>{data.employee_name}</Td>}
                                        {data.team_name && <Td>{data.team_name}</Td>}
                                        {data.company_email && <Td>{data.company_email}</Td>}
                                        {data.pickup_address && <Td>{data.pickup_address}</Td>}
                                        {data.destination_address && <Td>{data.destination_address}</Td>}
                                        {data.city_name && <Td>{data.city_name}</Td>}
                                        {data.country_name && <Td>{data.country_name}</Td>}
                                        {data.first_name && <Td>{data.first_name}</Td>}
                                        {data.last_name && <Td>{data.last_name}</Td>}
                                        {data.email && <Td>{data.email}</Td>}
                                        {data.gender && <Td>{data.gender}</Td>}
                                        {data.city && <Td>{data.city}</Td>}
                                        {data.vehicle_brand && <Td>{data.vehicle_brand}</Td>}
                                        {data.vehicle_model && <Td>{data.vehicle_model}</Td>}
                                        {data.driver_name && <Td>{data.driver_name}</Td>}
                                        {data.driver_address && <Td>{data.driver_address}</Td>}
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <TablePagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={data.length}
            />
        </Box>
    )
}

export default TableData