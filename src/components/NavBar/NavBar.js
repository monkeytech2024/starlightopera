import React, { useState } from 'react'

import {Badge, Button, Grid} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Box, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BiUnderline } from 'react-icons/bi';
import './NavBar.css';
import { useBetween } from "use-between";
import { useTranslation} from "react-i18next";
import {makeStyles} from "@mui/styles";
import { motion, useAnimationControls } from "framer-motion"

    const useStyles = makeStyles({
      activeStyle : {
        fontFamily: 'Zen Old Mincho',
        fontWeight: "400",
        color: '#CC0000',
        textDecoration: 'underline',
        fontSize: "1.5vh",
        textUnderlineOffset: '0.8vh', 
    },
    deactiveStyle :{
      fontFamily: 'Zen Old Mincho',
      fontWeight: "400",
      color: '#000000',
      textDecoration: 'none',
      fontSize: '1.5vh',
      '&:hover': {
        color: '#CC0000'
    },
  }
  });

  const useFormState = () => {
    const [nav, setNav] = useState(false);
    return [nav, setNav];
  };

  const useSharedFormState = () =>  
    {
      return useBetween(useFormState);
    }
 function Navbar() 
 {
  const [nav, setNav] = useSharedFormState();
  const { t, i18n } = useTranslation();
  const changeLng = (lang) => 
  {
    setNav(false);
        i18n.changeLanguage(lang);
    };



    const handleNav = () => {
      setNav(!nav)
  }

  
 const getMinHeight = (size) =>
 {
  if(size=="lg")
  {
      return "3vh"
  }
  if(!nav)
    {
      return "3vh";
    }
    else
    {
       return "100vh";
    }
 }

  const styles = (lang) =>
  {
    if(i18n.language == lang)
      {
        return classes.activeStyle;
      }
      else
      {
        return classes.deactiveStyle;
      }
  }
  const handleClick = () => {
    setNav(false);
  };

  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default" sx={{width: "100%", minHeight: {lg:getMinHeight("lg"), md:getMinHeight("md"), xs:getMinHeight("xs")}, bgcolor: "background.navbar"}}>
      <Toolbar>
        <Grid container alignItems={{lg:"center", md:"center", xs:"center"}} height={{lg:"4vh", md:"6vh", xs:"4vh"}} direction={{lg:"row", md:"row", xs:"row"}}>
          <Grid item lg={0.125} md={0.5} xs={0.5}/>
          <Grid item lg={2.375} md={11} xs={11} height="100%">
            <Stack direction="row"  height= {{lg:"4vh", md:"100%", xs:"100%"}} spacing={{lg:"0.5vw", md:"1.5vw", xs:"2.5vw"}} alignItems="center" justifyContent={{lg:"flex-start", md:"center", xs:"center"}}>
              <Stack direction="column" height="100%"  justifyContent="center">
                <img height="95%" alt="Starlight Chinese Opera" src={ICON}/>
              </Stack>

              <Stack direction="column"> 
                <Typography sx={{fontWeight:"600", fontSize:{lg:"1vw", md: "120%", xs:"130%"}}}>寶新聲戲曲演藝中心</Typography>
                <Typography sx={{fontWeight:"500", fontSize:{lg:"0.5vw", md: "80%", xs:"70%"}}}>Starlight Chinese Opera Performing Art Centre</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={0} md={0.25} xs={0.25} display={{lg:"none", md:"flex", xs:"flex"}}>
            {nav ? (<CloseIcon className="hamburger" onClick={handleNav} sx={{ fontSize:{lg:"0vw", md:"4vw", xs:"4vw"}, color:"primary.black"}}/>) : (<MenuIcon className="hamburger" onClick={handleNav} sx={{fontSize:{lg:"0vw", md:"4vw", xs:"4vw"}, color:"primary.black"}} size={20}/>)}
          </Grid>
          <Grid item lg={0} md={0.25} xs={0.25} display={{lg:"none", md:"flex", xs:"flex"}}/>
          <Grid item lg={7} md={12} xs={12}  marginTop={{lg:"0vh", md: "20vh", xs:"15vh"}} className={nav ? 'nav-menu active' : 'nav-menu'} justifyContent="center">
            <Stack spacing="15vh" direction={{lg:"column", md:"column", xs:"column"}}>
              <Stack direction={{lg:"row", md:"column", xs:"column"}} divider={<Divider orientation="vertical" flexItem/>} justifyContent="center" spacing={{lg:"0.5vw", md: "2vh", xs: "2vh"}}>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/home'>{t("NavBar.Home.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/aboutus'>{t("NavBar.AboutUs.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/news'>{t("NavBar.News.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/prevact'>{t("NavBar.PrevAct.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/gallery'>{t("NavBar.Gallery.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/collections'>{t("NavBar.Collections.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/contactus'>{t("NavBar.ContactUs.title")}</NavLink></Stack>
              </Stack>              
              <Stack direction="row" display={{lg:"none", md:"flex", xs:"flex"}} justifyContent={"center"} spacing="1.5vh">
                <NavLink className={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
                <NavLink className={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={2.375} md={0} xs={0} marginTop={{lg:"0vh", md: "0vh", xs:"0vh"}} display={{lg:"flex", md:"none", xs:"none"}} justifyContent="flex-end">
            <Stack direction="row" spacing="1.5vh">
              <NavLink className={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
              <NavLink className={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink>
            </Stack>
          </Grid>
          <Grid item lg={0.125} md={0} xs={0} display={{lg:"flex", md:"none", xs:"none"}}/>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}export default Navbar