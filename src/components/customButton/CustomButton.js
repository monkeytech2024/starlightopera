import * as React from 'react';

import {Button} from "@mui/material";

import {makeStyles} from "@mui/styles";



export default function CustomButton(props) {


  return (
    <Button
      href={props.href}
      variant="contained"
      
      sx={{
        width:{lg:"140px", md:"160px", xs:"120px"},
        height:{lg:"45px", md:"45px", xs:"40px"},
        bgcolor:"#ffffff",
        borderRadius:"10px",
        color:'#ee0000',
        textTransform: 'none',

        fontSize:{lg:"18px", md:"18px", xs:"16px"},
        fontWeight:"600",
        "&:hover": {
          bgcolor:"#ee0000",
          borderRadius:"10px",
          color:'#ffffff',
          transform: 'scale(1.1)',
        },
      }}
    >
      {props.text}
    </Button>
  )
}