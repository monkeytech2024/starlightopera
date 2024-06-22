import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";

const PageContent = ({ children }) => {

    return (
      <Grid marginTop={10}container alignItems="center" justifyContent="space-evenly">
      
      <Grid item xs={5}/>
      <Grid item xs={2}><Stack marginTop= "100px" direction="row" justifyContent="center"><Typography  color="primary.grey" fontSize={40}>Coming Soon</Typography></Stack></Grid>
      <Grid item xs={5}/>
    </Grid>
    );
   };
   export default PageContent;