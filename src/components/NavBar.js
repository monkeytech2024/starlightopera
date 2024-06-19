import React, { useState } from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars, FaTimes} from 'react-icons/fa'
import {Badge, Button, Grid, Link} from "@mui/material";
import './NavBar.css';
import ICON from "../assets/images/ICON.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import InstagramIcon from "@mui/icons-material/Instagram";

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import './NavBar.css';

export default function Navbar() {



  const handleClick = (event, dest) => {
    const anchor = (
      event.target.ownerDocument || document
    ).querySelector(dest);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <AppBar
      className="navbar"
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.navbar',
        fontWeight: 700
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item md={3}>
            <Grid container justifyContent="space-evenly">
            <Button  underline="none" component="button"  onClick={(evt) => handleClick(evt, "#home")} className="NavButton" sx={{ typography: "h6", textTransform: 'none', color: '#000000',  
    fontSize: {md: 20, xs:20}  }}>
<img width={50} height={50} class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img>
      Starlight Chinese Opera</Button>
            </Grid>
          </Grid>
          <Grid item md={8} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 4 }}>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{ fontSize: 14}}>Home</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#about")} sx={{ typography: "h6", fontSize: 14 }}>About Us</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#profile")} sx={{ typography: "h6", fontSize: 14 }}>News</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#project")} sx={{ typography: "h6", fontSize: 14 }}>Previous Events</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{ typography: "h6", fontSize: 14 }}>Gallery</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#about")} sx={{ typography: "h6", fontSize: 14 }}>Collections</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#profile")} sx={{ typography: "h6", fontSize: 14 }}>Contact and Support</Link>
            </Stack>
          </Grid>
          <Grid item md={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained"   size="large"onClick={(evt) => handleClick(evt, "#aboutme")}  sx={{color: '#4484b2', bgcolor: '#f5f5f5', transition: "0.4s",
    ':hover': {
      bgcolor: '#4484b2',
      color: '#f5f5f5',
      transform: 'scale(1.1)',
    }, borderRadius: "20px", fontSize: 14 }}>繁體中文</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}