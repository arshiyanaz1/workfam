import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';


const ButtonComponent=({color,backgroundColor,text})=> {
    return (
        <Button  style={{borderRadius:10,color:color,backgroundColor:backgroundColor,padding:8,fontFamily:'Roboto Slab',margin:5}} variant="contained">{text}</Button>
    )
}

export default ButtonComponent
