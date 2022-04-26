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
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';

const TableData = ({body, dataPerPage}) => {
    const [data, setData] = useState(body);
    const [arrow, setArrow] = useState(null);
    const [headerValue, setHeaderValue] = useState(null);
    const [order, setOrder] = useState("ASC");
    const [search, setSearch] = useState("");
    const [pagination, setPagination] = useState({
        start: 0,
        end: dataPerPage
    })

    const onPaginationChange = (start, end) => {
        setPagination({
            start: start,
            end: end
        })
    }

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) => {
                if (typeof a[col] === "number") {
                    return a[col] > b[col] ? 1 : -1
                } else {
                    return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                }
            }
            );
            setHeaderValue(col);
            setArrow(<ArrowUpIcon />);
            setData(sorted);
            setOrder("DSC");
        } else if (order === "DSC") {
            const sorted = [...data].sort((a, b) => {
                if (typeof a[col] === "number") {
                    return a[col] < b[col] ? 1 : -1
                } else {
                    return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                }
            }
            );
            setHeaderValue(col);
            setArrow(<ArrowDownIcon />);
            setData(sorted);
            setOrder("ASC");
        }

    }

    console.log("remdered")
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
                                {/* {head.map((head) =>
                                    <Th key={Math.random()} onClick={() => sorting(head)}>
                                        <Box>{head} {state === head ? arrow : null}</Box>
                                    </Th>)
                                } */}
                                {
                                    Object.keys(data[0]).map((x) =>
                                        <Th key={Math.random()} onClick={() => sorting(x)}>
                                            <Box>{x} {headerValue === x && arrow}</Box>
                                        </Th>)
                                }
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.filter((val) => {
                                if (search === "") {
                                    return val;
                                } else if (
                                    (val.id && val.id.toString().includes(search.toString())) ||
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
                                    // Object.values(val).map(x=>(x.toLowerCase().includes(search.toLowerCase())))
                                ) {
                                    return val;
                                }
                            }).slice(pagination.start, pagination.end).map(data => {
                                return (
                                    <Tr key={data.id}>
                                        {Object.values(data).map(x=>(<><Td>{x}</Td></>))}
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <TablePagination
                dataPerPage={dataPerPage}
                onPaginationChange={onPaginationChange}
                total={data.length}
            />
        </Box>
    )
}

export default TableData