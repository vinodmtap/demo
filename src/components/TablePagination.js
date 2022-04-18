import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const TablePagination = ({showPerPage, onPaginationChange, total}) => {
    const[counter, setCounter] = useState(1);

    useEffect(()=>{
        const value = showPerPage*counter;
        onPaginationChange((value-showPerPage), value);
    },[counter])
    //  console.log(onPaginationChange);
    const onButtonClick = (type) => {
        if(type === "prev"){
            if(counter===1){
                setCounter(1);
            }else{
            setCounter(counter-1)
        }
    }else if(type === "next"){
        if(Math.ceil(total/showPerPage)===counter){
            setCounter(counter);
        }else{
            setCounter(counter+1);
        }
    }
}
  return (
    <Box>
        <Button onClick={()=>onButtonClick("prev")}>PREV</Button>
        <Button onClick={()=>onButtonClick("next")}>NEXT</Button>
    </Box>
  )
}

export default TablePagination;