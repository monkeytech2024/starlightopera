import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";

const MedHeader = ( { children ,weight}) => {

    return (
      <Grid marginTop={10}container alignItems="center" justifyContent="space-evenly">
      <Grid item xs={3.25}/>
      <Grid item xs={(5.5-weight)/2}><Divider sx={{marginTop: "1rem",backgroundColor: "primary.main",height: "0.1rem",width: "100%"}}/></Grid>
      <Grid item xs={weight} ><Stack direction="row" justifyContent="center"><Typography  color="primary.main" fontSize={"2rem"}>{children}</Typography></Stack></Grid>
      <Grid item xs={(5.5-weight)/2}><Divider sx={{marginTop: "1rem", backgroundColor: "primary.main",height:"0.1rem",width: "100%"}}/></Grid>
    <Grid item xs={3.25}/> 
    </Grid>
    );
   };
   export default MedHeader;