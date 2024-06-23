import React, { useState } from 'react'

import {Badge, Button, Grid} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";
 
import { BiUnderline } from 'react-icons/bi';
import './NavBar.css';
import { useTranslation} from "react-i18next";


export default function Navbar() {

  const { t, i18n } = useTranslation();

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    document.getElementsByClassName('lang').disabled = true;
  };

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
              <NavLink className="navv" to ='/home'>{t("NavBar.Home.title")}</NavLink>
              <NavLink className="navv" to ='/aboutus'>{t("NavBar.AboutUs.title")}</NavLink>
              <NavLink className="navv" to ='/news'>{t("NavBar.News.title")}</NavLink>
              <NavLink className="navv" to ='/prevact'>{t("NavBar.PrevAct.title")}</NavLink>
              <NavLink className="navv" to ='/gallery'>{t("NavBar.Gallery.title")}</NavLink>
              <NavLink className="navv" to ='/collections'>{t("NavBar.Collections.title")}</NavLink>
              <NavLink className="navv" to ='/contactus'>{t("NavBar.ContactUs.title")}</NavLink>
            </Stack>
          </Grid>
          <Grid item md={2.5} sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
          <Button className="lang" variant="contained"   size="large" onClick={() => changeLng('zh')}  sx={{color: '#ffffff', bgcolor: '#A7A7A7', transition: "0.4s",
     borderRadius: "20px", fontSize: 14 , marginRight: 2 , minWidth : "6.5rem"}}>{t("NavBar.language_chinese")}</Button>
          <Button className="lang" variant="contained"    size="large" onClick={() => changeLng('en')}  sx={{color: '#ffffff', bgcolor: '#A7A7A7', transition: "0.4s",
     borderRadius: "20px", fontSize: 14 , minWidth : "6.5rem"}}>{t("NavBar.language_english")}</Button>

     
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}