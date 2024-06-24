import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";

const MedHeader = ( { children ,weight}) => {

    return (
      <Grid marginTop={"6vh"}container alignItems="center" justifyContent="space-evenly">
      <Grid item xs={4.25}/>
      <Grid item xs={(3.5-weight)/2}><Divider sx={{marginTop: "0.5rem",backgroundColor: "primary.darkred",height: "0.1rem",width: "100%"}}/></Grid>
      <Grid item xs={weight} ><Stack direction="row" justifyContent="center"><Typography fontWeight="500" color="primary.darkred" fontSize={"2.2vh"}>{children}</Typography></Stack></Grid>
      <Grid item xs={(3.5-weight)/2}><Divider sx={{marginTop: "0.5rem", backgroundColor: "primary.darkred",height:"0.1rem",width: "100%"}}/></Grid>
    <Grid item xs={4.25}/> 
    </Grid>
    );
   };
   export default MedHeader;