import React, { useState } from 'react'

import {Badge, Button, Grid} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";

import { BiUnderline } from 'react-icons/bi';
import './NavBar.css';
import { useTranslation} from "react-i18next";


export default function Navbar() {

  const { t, i18n } = useTranslation();
  const changeLng = (lang) => {

        i18n.changeLanguage(lang);

    };

    const activeStyle = {
      
        color: '#CC0000',
        textDecoration: 'underline',
        fontSize: '1.5vh',
    };

    const deactiveStyle = {
      
      color: '#000000',
      textDecoration: 'none',
      fontSize: '1.5vh',
  };


  const styles = (lang) =>
  {
    if(i18n.language == lang)
      {
        return activeStyle;
      }
      else
      {
        return deactiveStyle;
      }
  }
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
      

      sx={{
        margin:"0vh",
        width: "100%",
        minHeight: "4vh",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.navbar',
        fontWeight: 700
      }}
    >
      <Toolbar >
        <Grid container alignItems="center"  position="relative" justifyContent="space-evenly">
          <Grid item md={2.5}>
            <Grid container justifyContent="flex-start" >
<Stack direction="row" height= "5vh">
<img  height="100%" class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img>

      <Stack marginLeft="1vh" spacing="0vh" display="column">
      <Typography  sx={{fontWeight:"600", fontSize: "2vh" }}>寶新聲戲曲演藝中心</Typography>
      <Typography sx={{fontWeight:"500", fontSize: "1vh" }}>Starlight Chinese Opera Performing Art Centre</Typography>
        </Stack></Stack>
            </Grid>
          </Grid>
          <Grid item md={7}justifyContent="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={{ xs: "1vh" }}>
              <NavLink className="navv" to ='/home'>{t("NavBar.Home.title")}</NavLink>
              <NavLink className="navv" to ='/aboutus'>{t("NavBar.AboutUs.title")}</NavLink>
              <NavLink className="navv" to ='/news'>{t("NavBar.News.title")}</NavLink>
              <NavLink className="navv" to ='/prevact'>{t("NavBar.PrevAct.title")}</NavLink>
              <NavLink className="navv" to ='/gallery'>{t("NavBar.Gallery.title")}</NavLink>
              <NavLink className="navv" to ='/collections'>{t("NavBar.Collections.title")}</NavLink>
              <NavLink className="navv" to ='/contactus'>{t("NavBar.ContactUs.title")}</NavLink>
            </Stack>
          </Grid>
          <Grid item  md={2.5}  sx={{display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
            <Stack direction="row" marginTop="0.2vh" spacing="1.5vh">
          <NavLink className="lang" style={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
          <NavLink className="lang" style={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink></Stack>

            


     
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}