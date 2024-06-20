import React, { useState } from 'react'

import {Badge, Button, Grid, Link} from "@mui/material";
import ICON from "../../assets/images/ICON.png";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";

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
            <Grid container justifyContent="flex-start" >

<img width={50} height={50} class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img>

      <Stack marginLeft={2} spacing="0px" display="column">
      <Typography  sx={{typography: "h6",fontSize: 24 }}>寶新聲戲曲演藝中心</Typography>
      <Typography sx={{fontSize: 14 }}>Starlight Chinese Opera Performing Art Centre</Typography>
        </Stack>
            </Grid>
          </Grid>
          <Grid item md={6}justifyContent="space-evenly" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 2 }}>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{typography: "h6", fontSize: 16}}>Home</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#about")} sx={{ typography: "h6", fontSize: 16 }}>About Us</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#profile")} sx={{ typography: "h6", fontSize: 16 }}>News</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#project")} sx={{ typography: "h6", fontSize: 16 }}>Previous Performances and Activities</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#home")} sx={{ typography: "h6", fontSize: 16 }}>Gallery</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#about")} sx={{ typography: "h6", fontSize: 16 }}>Collections</Link>
              <Link color="primary.black" underline="none" component="button" onClick={(evt) => handleClick(evt, "#profile")} sx={{ typography: "h6", fontSize: 16 }}>Contact and Support</Link>
            </Stack>
          </Grid>
          <Grid item md={3} sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
          <Button variant="contained"   size="large"onClick={(evt) => handleClick(evt, "#aboutme")}  sx={{color: '#ffffff', bgcolor: '#A7A7A7', transition: "0.4s",
     borderRadius: "20px", fontSize: 14 }}>繁體中文</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}