import React, { useState } from 'react'

import {Grid} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Divider, Stack} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css';
import { useBetween } from "use-between";
import { useTranslation} from "react-i18next";
import {makeStyles} from "@mui/styles";
import { useNavigate } from "react-router-dom";

    const useStyles = makeStyles({
      activeStyle : {
        fontFamily: "Noto Serif HK",
        fontWeight: "400",
        color: '#CC0000',
        textDecoration: 'underline',
        fontSize: "1.1vw",
        textUnderlineOffset: '0.8vh', 
        '@media screen and (max-width: 1535px)':
        {
          fontSize: '18px',
        }

    },
    deactiveStyle :{
      fontFamily: "Noto Serif HK",
      fontWeight: "400",
      color: '#000000',
      textDecoration: 'none',
      fontSize: '1.1vw',
      '&:hover': {
        color: '#CC0000'
    },
    '@media screen and (max-width: 1535px)':
    {
      fontSize: '18px',
    }

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
  let navigate = useNavigate();


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
  if(size==="xl")
  {
      return "75px"
  }
  if(!nav)
    {
      return "50px";
    }
    else
    {
       return "100vh";
    }
 }

  const styles = (lang) =>
  {
    if(i18n.language === lang)
      {
        return classes.activeStyle;
      }
      else
      {
        return classes.deactiveStyle;
      }
  }
  const handleClick = () => {
    window.scrollTo(0, 0);
    setNav(false);
  };

  const handleClickIcon = () =>
    {
      navigate("/home");
      window.scrollTo(0, 0);
    }
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default" sx={{width: "100%", minHeight: {xl:getMinHeight("xl"), md:getMinHeight("md"), xs:getMinHeight("xs")}, bgcolor: "background.navbar"}}>
      <Toolbar>
        <Grid container alignItems={{xl:"center", md:"center", xs:"center"}} height={{xl:"75px", md:"75px", xs:"50px"}} >
          <Grid item xl={0} md={0.5} xs={0.5} display={{xl:"none", md:"flex", xs:"flex"}}/>
          <Grid item xl={2.5} md={11} xs={11} height="100%">
            <Stack  onClick={()=>handleClickIcon()} direction="row"  height= {{xl:"90%", md:"100%", xs:"85%"}} spacing={{xl:"0.3vw", md:"1vw", xs:"2vw"}} alignItems="center" justifyContent={{xl:"flex-start", md:"center", xs:"center"}}>
              <Stack direction="column" height="100%"  justifyContent="center">
                <img  height="100%" alt="Starlight Chinese Opera" src={ICON}/>
              </Stack>

              <Stack direction="column"> 
                <Typography sx={{fontWeight:"600", fontSize:{xl:"1.5vw", md: "2.5vh", xs:"25px"}}}>寶新聲戲曲演藝中心</Typography>
                <Typography sx={{fontWeight:"500", fontSize:{xl:"0.6vw", md: "1.15vh", xs:"10px"}}}>Starlight Chinese Opera Performing Art Centre</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xl={0} md={0.20} xs={0.20} display={{xl:"none", md:"flex", xs:"flex"}}/>
          <Grid item xl={0} md={0.25} xs={0.25} direction="column" justifyContent="center" display={{xl:"none", md:"flex", xs:"flex"}}>
            {nav ? (<CloseIcon className="hamburger" onClick={handleNav} sx={{ fontSize:{xl:"0vw", md:"4vw", xs:"5vw"}, color:"primary.black"}}/>) : (<MenuIcon className="hamburger" onClick={handleNav} sx={{fontSize:{xl:"0vw", md:"4vw", xs:"5vw"}, color:"primary.black"}} size={20}/>)}
          </Grid>
          
          <Grid item xl={7} md={12} xs={12}  marginTop={{xl:"0vh", md: "5vh", xs:"10vh"}} className={nav ? 'nav-menu active' : 'nav-menu'} direction={{xl:"column", md:"column", xs:"column"}} justifyContent="center">
            <Stack spacing="10vh" >
              <Stack direction={{xl:"row", md:"column", xs:"column"}} flexWrap={true} divider={<Divider orientation="vertical" flexItem/>} justifyContent="center" spacing={{xl:"0.5vw", md: "2vh", xs: "2vh"}}>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/home'>{t("NavBar.Home.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/aboutus'>{t("NavBar.AboutUs.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/news'>{t("NavBar.News.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/prevact'>{t("NavBar.PrevAct.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/gallery'>{t("NavBar.Gallery.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/collections'>{t("NavBar.Collections.title")}</NavLink></Stack>
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/contactus'>{t("NavBar.ContactUs.title")}</NavLink></Stack>                
                <Stack direction="row" justifyContent={"center"}><NavLink className="navv" onClick={() => handleClick()} to ='/supportus'>{t("NavBar.SupportUs.title")}</NavLink></Stack>            
              </Stack>              
              <Stack direction="row"  display={{xl:"none", md:"flex", xs:"flex"}} justifyContent={"center"} spacing="1.5vh">
                <NavLink className={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
                <NavLink className={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xl={0} md={0.05} xs={0.05} display={{xl:"none", md:"flex", xs:"flex"}}/>
          <Grid item xl={2.5} md={0} xs={0} marginTop={{xl:"0vh", md: "0vh", xs:"0vh"}} display={{xl:"flex", md:"none", xs:"none"}} justifyContent="flex-end">
          <Stack direction="column" justifyContent="center">
            <Stack direction="row" spacing="1vh">
              <NavLink className={styles("en")} onClick={() => changeLng("en")}>{t("NavBar.language-en")}</NavLink>
              <NavLink className={styles("zh")} onClick={() => changeLng("zh")}>{t("NavBar.language-zh")}</NavLink>
            </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}export default Navbar