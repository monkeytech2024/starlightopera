import React, { useState } from 'react'

import {Badge, Button, Grid} from "@mui/material";
import ICON from "../../assets/images/ICON.png";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import StyledLink from '../StyledLink/StyledLink'; 
import { BiUnderline } from 'react-icons/bi';

import { useTranslation, Trans } from "react-i18next";

export default function Navbar() {

  const { t } = useTranslation();



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
      position="sticky"
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
          <Grid item md={2.5}>
            <Grid container justifyContent="flex-start" >

<img width={50} height={50} class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img>

      <Stack marginLeft={2} spacing="0px" display="column">
      <Typography  sx={{typography: "h6",fontSize: 24 }}>寶新聲戲曲演藝中心</Typography>
      <Typography sx={{fontSize: 14 }}>Starlight Chinese Opera Performing Art Centre</Typography>
        </Stack>
            </Grid>
          </Grid>
          <Grid item md={7}justifyContent="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: 2 }}>
              <StyledLink to ='/home'>{t("Navbar.home")}</StyledLink>
              <StyledLink to ='/aboutus'>About Us</StyledLink>
              <StyledLink to ='/news'>News</StyledLink>
              <StyledLink to ='/prevact'>Previous Performances and Activities</StyledLink>
              <StyledLink to ='/gallery'>Gallery</StyledLink>
              <StyledLink to ='/collections'>Collections</StyledLink>
              <StyledLink to ='/contactus'>Contact and Support</StyledLink>
            </Stack>
          </Grid>
          <Grid item md={2.5} sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
          <Button variant="contained"   size="large"onClick={(evt) => handleClick(evt, "#aboutme")}  sx={{color: '#ffffff', bgcolor: '#A7A7A7', transition: "0.4s",
     borderRadius: "20px", fontSize: 14 }}>繁體中文</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}