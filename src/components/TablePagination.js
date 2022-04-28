import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const TablePagination = ({ dataPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1);
    // const [numberOfButtons, setNumberOfButtons] = useState(0);

    const numberOfButtons = Math.ceil(total / dataPerPage);

    useEffect(() => {
        const value = dataPerPage * counter;
        onPaginationChange((value - dataPerPage), value);
    }, [counter])

    // useEffect(() => {
    //     setNumberOfButtons(Math.ceil(total / dataPerPage));
    // }, [total]);

    const onButtonClick = (type) => {
        if (type === "prev") {
            (counter===1)?setCounter(1):setCounter(counter-1);
        } else if (type === "next") {
            (Math.ceil(total/dataPerPage)===counter)?setCounter(counter):setCounter(counter+1);
        }
    }
    
    return (
        <Box>
            {counter > 1 && <Button m={2} onClick={() => onButtonClick("prev")}>PREV</Button>}
            {new Array(numberOfButtons).fill("").map((el, index) => (
                <Button m={2} onClick={() => setCounter(index + 1)} key={index}
                    colorScheme={index + 1 === counter && "teal"}
                    variant={index + 1 !== counter ? "ghost" : "solid"} >
                    {index + 1}
                </Button>
            ))}
            {(counter !== Math.ceil(total / dataPerPage) && total>0) && <Button m={2} onClick={() => onButtonClick("next")}>NEXT</Button>}
        </Box>
    )
}

export default TablePagination;