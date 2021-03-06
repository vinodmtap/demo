import React, { useEffect, useRef } from 'react'
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

const TableData = ({ body, dataPerPage }) => {
    const [data, setData] = useState(body);
    const [headerValue, setHeaderValue] = useState(null);
    const [order, setOrder] = useState(null);
    const [search, setSearch] = useState("");
    const [sortedResult, setSortedResult] = useState(body);
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

    useEffect(() => {
        let filteredData = sortedResult.filter((val) => {
            if (search === "") {
                return val;
            }
            else {
                let dataObjectArray = Object.values(val);
                for (let element of dataObjectArray) {
                    if (element.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                        return val;
                    }
                }
            }
        })
        setData(filteredData);
    }, [search, sortedResult])

    const arrowToggler = (x) => {
        headerValue !==x && setHeaderValue(x);
        setOrder(order === "DSC" ? "ASC" : "DSC");
    }

    useEffect(() => {
        if (order === null) {
            return;
        } else {
            const col = headerValue;
            if (order === "ASC") {
                const sorted = [...data].sort((a, b) => {
                    if (typeof a[col] === "number") {
                        return a[col] > b[col] ? 1 : -1
                    } else {
                        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                    }
                }
                );
                setSortedResult(sorted);

            } else if (order === "DSC") {
                const sorted = [...data].sort((a, b) => {
                    if (typeof a[col] === "number") {
                        return a[col] < b[col] ? 1 : -1
                    } else {
                        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                    }
                }
                );
                setSortedResult(sorted);
            }
        }
    }, [order])

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
                                {
                                    Object.keys(!!data && data.length ? data[0] : {}).map((x, index) =>
                                        <Th key={index} onClick={() => arrowToggler(x)}>
                                            <Box>{x}{(order === "ASC" && headerValue === x) && <ArrowDownIcon />}
                                                {(order === "DSC" && headerValue === x) && <ArrowUpIcon />}
                                            </Box>
                                        </Th>)
                                }
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.slice(pagination.start, pagination.end).map((data,index) => {
                                return (
                                    <Tr key={index}>
                                        {Object.values(data).map((x, index) => (<Td key={index}>{x}</Td>))}
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
