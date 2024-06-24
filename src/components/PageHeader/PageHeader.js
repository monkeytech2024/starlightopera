import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";

const MedHeader = ( { children ,weight}) => {

    return (
      <Grid item md={12} xs={12} marginTop={"6vh"}container alignItems="center" justifyContent="center">
      <Stack direction="row" >
      <Stack width={{md: (30 - weight)/2 + "vw", xs: (90 - weight*3)/2 +"vw"}} direction="row" justifyContent="flex-start"><Divider sx={{marginTop: {md:"2vh", xs:"1.5vh"},backgroundColor: "primary.darkred", width:"90%", height: "0.5px"}}/></Stack>
      <Stack width={{md:weight + "vw", xs:weight*3+"vw"}} direction="row" justifyContent="center"><Typography  fontWeight={{md:"400", xs:"500"}} color="primary.darkred" fontSize={{md:"1.3vw", xs:"4vw"}}>{children}</Typography></Stack>
      <Stack width={{md: (30 - weight)/2 + "vw", xs: (90 - weight*3)/2 +"vw"}}direction="row" justifyContent="flex-end"><Divider sx={{marginTop: {md:"2vh", xs:"1.5vh"}, backgroundColor: "primary.darkred",width:"90%",height:"0.5px"}}/></Stack>

    </Stack>
    </Grid>
    );
   };
   export default MedHeader;