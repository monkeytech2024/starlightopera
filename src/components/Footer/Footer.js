import React from 'react';
import {Grid,Link, Stack, Typography} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import ContactBar from '../ContactBar/ContactBar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function Copyright() {
  return (

    <Grid container
    justifyContent="space-evenly"
    spacing={2}
    sx={{
      minHeight: "35vh",
      color: "white",
      
      bgcolor: 'background.navbar',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: { xs:"20%", md: "center" }
    }}
  >
    <Grid item xs={1.5}></Grid>
     <Grid container item xs={4.5} direction="column" justifyContent="space-evenly">
      <Grid item xs={1}></Grid>
    <Grid item xs={2}><Stack direction="row" justifyContent="flex-start"><Typography variant="h4" color="#000000" > Contact Us </Typography></Stack></Grid>
    <Grid item xs={1}><Stack direction="row" justifyContent="flex-start"><Typography variant="h7" color="#000000" ><LocalPhoneOutlinedIcon fontSize='small'/> &nbsp;&nbsp;+1 (647) 887 1393 </Typography></Stack></Grid>
    <Grid item xs={1}><Stack direction="row" justifyContent="flex-start"><Typography variant="h7" color="#000000" ><EmailOutlinedIcon fontSize='small'/>&nbsp;&nbsp;info@starlightopera.com </Typography></Stack></Grid>
    <Grid item xs={1}><Stack direction="row" justifyContent="flex-start"><Typography variant="h7" color="#000000" ><LocationOnOutlinedIcon fontSize='small'/> &nbsp;Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography></Stack></Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={3}><Stack direction="row" justifyContent="flex-start"><ContactBar /></Stack></Grid>
  </Grid>
  <Grid container item xs={4.5} direction="column" justifyContent="space-evenly">
  <Grid item xs={1}></Grid>
  <Grid item xs={5}><Stack direction="row" justifyContent="flex-end"><img width={100} height={100} class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img></Stack></Grid>
  <Grid item xs={3}></Grid>
  <Grid item xs={3}><Stack direction="row" justifyContent="flex-end"><Typography variant="body1" color="#000000" >
        {'Copyright © '}
        <Link color="inherit" href="#">
        </Link>{' '}
        {new Date().getFullYear()}
        {' Starlight Chinese Opera, all rights reserved'}
      </Typography></Stack></Grid>
  </Grid>


  <Grid item xs={1.5}></Grid>
    </Grid>
  );
}