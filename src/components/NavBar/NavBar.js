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


    const useStyles = makeStyles({
      activeStyle : {
        fontFamily: 'Zen Old Mincho',
        fontWeight: "400",
        color: '#CC0000',
        textDecoration: 'underline',
        fontSize: '1.5vh',
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

  
 const getMinHeight = () =>
 {
  if(!nav)
    {
      return "4vh";
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
    <AppBar position="sticky" color="default" sx={{width: "100%", minHeight: getMinHeight(), bgcolor: "background.navbar"}}>
      <Toolbar>
        <Grid container alignItems="center" position="relative">
          <Grid item md={0.125} xs={1}/>
          <Grid item md={2.375} xs={10}>
            <Stack direction="row" height= "5vh" spacing="0.5vw" alignItems="center" justifyContent={{md:"flex-start", xs:"center"}}>
              <Stack direction="column" height="100%"  justifyContent="center">
                <img height="95%" alt="Starlight Chinese Opera" src={ICON}/>
              </Stack>

              <Stack direction="column"> 
                <Typography sx={{fontWeight:"600", fontSize:"2vh"}}>寶新聲戲曲演藝中心</Typography>
                <Typography sx={{fontWeight:"500", fontSize:"1vh"}}>Starlight Chinese Opera Performing Art Centre</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={0} xs={0.5} display={{md:"none", xs:"flex"}}>
            {nav ? (<CloseIcon className="hamburger" onClick={handleNav} size={20} style={{color:"primary.black"}}/>) : (<MenuIcon className="hamburger" onClick={handleNav} style={{color:"primary.black"}} size={20}/>)}
          </Grid>
          <Grid item md={0} xs={0.5} display={{md:"none", xs:"flex"}}/>
          <Grid item md={7} xs={12} marginTop={{md: "0vh", xs:"20vh"}} className={nav ? 'nav-menu active' : 'nav-menu'} justifyContent="center">
            <Stack spacing="15vh" justifyContent={"space-between"} direction={{xs:"column"}}>
              <Stack direction={{md:"row", xs:"column"}} divider={<Divider orientation="vertical" flexItem/>} justifyContent="center" spacing={{md: "1vh", xs: "2vh"}}>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/home'>{t("NavBar.Home.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/aboutus'>{t("NavBar.AboutUs.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/news'>{t("NavBar.News.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/prevact'>{t("NavBar.PrevAct.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/gallery'>{t("NavBar.Gallery.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/collections'>{t("NavBar.Collections.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/contactus'>{t("NavBar.ContactUs.title")}</NavLink></Stack>
              </Stack>              
              <Stack direction="row" display={{md:"none", xs:"flex"}} justifyContent={"center"} spacing="1.5vh">
                <NavLink className={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
                <NavLink className={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={2.375} xs={0} display={{md:"flex", xs:"none"}} justifyContent="flex-end">
            <Stack direction="row" spacing="1.5vh">
              <NavLink className={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
              <NavLink className={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink>
            </Stack>
          </Grid>
          <Grid item md={0.125} xs={0} display={{md:"flex", xs:"none"}}/>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}export default Navbar