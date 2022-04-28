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
    const [count, setCount] = useState(true);
    const [data, setData] = useState(body);
    const [arrow, setArrow] = useState(true);
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

    useEffect(() => {
        let filteredData = data.filter((val) => {
            if (search === "") {
                return val;
            }
            else {
                let dataObjectArray = Object.values(val);
                for(let element of dataObjectArray){
                    if (element.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                        return val;
                    }
                }
            }
        })
        setData(filteredData);
    }, [search])

   const arrowToggler = (x) => {
    // if(order === "ASC"){
    //     setOrder("DES");
    // }else{
    //     setOrder("ASC");
    // }
    setCount(prev=>!prev);
    setHeaderValue(x);
   }

    // const sorting = (col) => {
    //     if (order === "ASC") {
    //         const sorted = [...data].sort((a, b) => {
    //             if (typeof a[col] === "number") {
    //                 return a[col] > b[col] ? 1 : -1
    //             } else {
    //                 return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    //             }
    //         }
    //         );
    //         setHeaderValue(col);
    //         setArrow(<ArrowUpIcon />);
    //         setData(sorted);
    //         setOrder("DSC");
    //     } else if (order === "DSC") {
    //         const sorted = [...data].sort((a, b) => {
    //             if (typeof a[col] === "number") {
    //                 return a[col] < b[col] ? 1 : -1
    //             } else {
    //                 return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    //             }
    //         }
    //         );
    //         setHeaderValue(col);
    //         setArrow(<ArrowDownIcon />);
    //         setData(sorted);
    //         setOrder("ASC");
    //     }
    // }

    const initialRender = useRef(true);
    
    useEffect(()=>{
        if(initialRender.current){
           initialRender.current = false;
        }else{
            const sorting = (col)=>{
                if (order === "ASC") {
                    const sorted = [...data].sort((a, b) => {
                        if (typeof a[col] === "number") {
                            return a[col] > b[col] ? 1 : -1
                        } else {
                            return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                        }
                    }
                    );
                    setOrder("DSC");
                    setData(sorted); 
                } else if (order === "DSC") {
                    const sorted = [...data].sort((a, b) => {
                        if (typeof a[col] === "number") {
                            return a[col] < b[col] ? 1 : -1
                        } else {
                            return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                        }
                    }
                    ); 
                    setOrder("ASC");
                    setData(sorted);  
                }
            };
            sorting(headerValue);
        }
    },[headerValue,count])

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
                                {/* {
                                    Object.keys(!!data && data.length ? data[0]:{}).map((x, index) =>
                                        <Th key={index} onClick={() => sorting(x)}>
                                            <Box>{x}{headerValue === x && arrow}</Box>
                                        </Th>)
                                } */}
                                {
                                    Object.keys(!!data && data.length ? data[0]:{}).map((x, index) =>
                                        <Th key={index} onClick={() => arrowToggler(x)}>
                                            <Box>{x}{(order === "ASC" && headerValue === x)?<ArrowUpIcon/>:<ArrowDownIcon/>}</Box>
                                        </Th>)
                                }
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.slice(pagination.start, pagination.end).map(data => {
                                return (
                                    <Tr key={data.id}>
                                        {Object.values(data).map((x,index) => (<Td key={index}>{x}</Td>))}
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