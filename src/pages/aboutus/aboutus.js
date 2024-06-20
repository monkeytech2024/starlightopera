import React from 'react'
import {Stack, Grid,Typography} from "@mui/material";

import {} from "@mui/material";





function Aboutus() {

    return (
    <Grid
      id={'abountus'}
      container
      direction="column"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >

<Stack direction="row" justifyContent="center"><Typography  sx={{color:"black", typography: "h6",fontSize: 36 }}>About Us Page</Typography></Stack>
 
    </Grid>
    )
}

export default Aboutus