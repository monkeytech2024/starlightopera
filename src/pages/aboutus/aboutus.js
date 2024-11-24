import React, { useState } from 'react'
import {Fade, Stack, Grid, Typography} from "@mui/material";
import {useTranslation} from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import PageHeader from '../../components/PageHeader/PageHeader';
import ADs from "../../assets/data/bioAD.json";
import BDs from "../../assets/data/bioBD.json";
import Presidents from "../../assets/data/bioPresident.json";
import Instructors from "../../assets/data/bioInstructor.json";
import StarlightOpera from "../../assets/images/Bios/starlightopera.jpg";
import AboutUsItem from '../../components/AboutUsItem/AboutUsItem';
import { AdsClick } from '@mui/icons-material';
function Aboutus() 
{
  const [read, setRead] = useState(false);

  const changeRead = () =>
  {
    setRead(true);
  }

  const {t} = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65.5vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
        <Stack direction="column" height="100%" width={{md:"90%", xs:"95%"}}>
          <PageHeader weight={t("NavBar.Starlight.length")}>{t("NavBar.Starlight.title")}</PageHeader>
          <Grid container direction={{lg:"row", md:"row", xs:"row"}} marginTop={{lg:"3vh", md:"2vh", xs:"1vh"}}>
        <Grid item lg={12} md={12} xs={12} marginBottom={{lg:"2.5vh", md: "1.5vh", xs:"0vh"}} >
            <Stack direction="row" justifyContent={{lg:"center", md:"center", xs:"center"}}>
              <Stack direciton="row" width={{lg:"35%", md:"75%", xs:"95%"}} justifyContent={{lg:"center", md:"center", xs:"center"}}>
              <img width="100%" alt="Starlight Opera" src={StarlightOpera}/>
              </Stack>
            </Stack>
        </Grid>
        <Grid item lg={12} md={12} xs={12} marginTop={{lg:"0vh", md: "0vh", xs:"1.5vh"}} marginBottom={{lg:"3vh", md: "0vh", xs:"0vh"}} >
            <Stack direction="row" justifyContent={{lg:"center", md:"center", xs:"center"}}>
            <Stack direciton="row" width={{lg:"100%", md:"90%", xs:"90%"}} justifyContent={{lg:"center", md:"center", xs:"center"}} display={read?"none":"flex"}>
            <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("Bios.intro-1")} <u onClick={()=> changeRead()}>{t("Bios.readmore")}</u> </Typography>
            </Stack>
            <Stack direciton="row" width={{lg:"100%", md:"90%", xs:"90%"}} justifyContent={{lg:"center", md:"center", xs:"center"}} display={read?"flex":"none"}>
            <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("Bios.intro-1")}  </Typography>
            <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("Bios.intro-2")}  </Typography>
            </Stack>
            </Stack>
        </Grid>
        <Grid item lg={12} md={12} xs={12} justifyContent="center" marginTop={{lg:"0vh", md: "0vh", xs:"1.5vh"}} marginBottom={{lg:"1vh", md: "0vh", xs:"0vh"}}  container>
          <PageHeader weight={t("NavBar.President.length")}>{t("NavBar.President.title")}</PageHeader>
          {
            Presidents.map((President)=>
            {
              return (
                <AboutUsItem thumbnail={President.thumbnail} name={President.name} id={President.id}/>
              )
            })
          }
        </Grid>
        <Grid item lg={12} md={12} xs={12} justifyContent="center" marginTop={{lg:"0vh", md: "0vh", xs:"1h"}} marginBottom={{lg:"1vh", md: "0vh", xs:"0vh"}} container >

        <PageHeader weight={t("NavBar.BD.length")}>{t("NavBar.BD.title")}</PageHeader>
        {
            BDs.map((BD)=>
            {
              return (
                <AboutUsItem thumbnail={BD.thumbnail} title={BD.title} name={BD.name} id={BD.id}/>
              )
            })
          }
        </Grid>
        <Grid item lg={12} md={12} xs={12} justifyContent="center" marginTop={{lg:"0vh", md: "0vh", xs:"1vh"}} marginBottom={{lg:"1vh", md: "0vh", xs:"0vh"}}container>
        <PageHeader weight={t("NavBar.AD.length")}>{t("NavBar.AD.title")}</PageHeader>
        {
            ADs.map((AD)=>
            {
              return (
                <AboutUsItem thumbnail={AD.thumbnail} title={AD.title} name={AD.name} id={AD.id}/>
              )
            })
          }
        </Grid>
        <Grid item lg={12} md={12} xs={12} justifyContent="center" marginTop={{lg:"0vh", md: "0vh", xs:"1vh"}} marginBottom={{lg:"1vh", md: "0vh", xs:"0vh"}} container>
        <PageHeader weight={t("NavBar.Instructor.length")}>{t("NavBar.Instructor.title")}</PageHeader>
        {
            Instructors.map((Instructor)=>
            {
              return (
                <AboutUsItem thumbnail={Instructor.thumbnail} title={Instructor.title} name={Instructor.name} id={Instructor.id}/>
              )
            })
          }
        </Grid>
          </Grid>
        </Stack>
      </Fade>
      
    </Stack>
  )
}export default Transition(Aboutus);