import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';

import {Grid, Typography, Fade, Stack} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";
import Transition from '../../components/Transition/Transition';

import Carousel from "../../components/Carousel/Carousel";
import HighlightItem from "../../components/HighlightItem/HighlightItem";
import highlights from "../../assets/data/highlight.json";
function Home() 
{
  const {t} = useTranslation();
  return (
    <Stack direction="column" sx={{justifyContent:"center", minHeight:"65.5vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
        <Stack width={"100%"}>
        <Stack direction="column" width={"100%"}>

          <Carousel/>
        
        </Stack>
        <Stack direction="column" width="100%">
          
          <Stack direction="column" width="100%">
          <Stack direction="row"  sx={{justifyContent:"center"}}>
          <Stack direction="column" width={{lg:"75%", md:"95%", xs:"97.5%"}} marginTop={{lg:"-12vh", md: "-4vh", xs: "-4vh"}} marginBottom={{lg:"2vh", md: "2vh", xs: "2vh"}} justifyContent="center" >
        <PageHeader weight={t("NavBar.Intro.length")}>{t("NavBar.Intro.title")}</PageHeader>
        <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"24px", md: "24px", xs:"18px"}}}>{t("Intro.IntroText")}</Typography> 
        <Grid container spacing="5vh" direction="column" justifyContent="center" width="100%" marginTop={{lg:"1vh", md:"1vh", xs:"1vh"}} marginBottom={2}>
       
       {   
       
         highlights.map((highlight)=>{
             return (
             <HighlightItem thumbnail={highlight.thumbnail} title={highlight.title} link={highlight.link} detail={highlight.detail} id={highlight.id}/>
             )
         })
       }
     </Grid>
      
      </Stack></Stack>
        </Stack>
        </Stack></Stack>
      </Fade>
    </Stack>

  )
}
export default Transition(Home);
