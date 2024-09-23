import React from 'react'
import {Grid, Fade, Stack} from "@mui/material";
import { useTranslation } from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import PageHeader from '../../components/PageHeader/PageHeader';
import NewsItem from '../../components/NewsItem/NewsItem';
import events from "../../assets/data/event.json";




function News() 
{
  const { t } = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65.5vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
      <Stack direction="column" height="100%" width={{lg:"70%", md:"95%", xs:"100%"}}>
        <PageHeader weight={t("NavBar.News.length")}>{t("NavBar.News.title")}</PageHeader>
        <Grid container spacing="5vh" direction="column" justifyContent="center" width="100%" marginBottom={2}>
       
          {   
          
            events.toReversed().map((event)=>{
                return (
                <NewsItem thumbnail={event.thumbnail} title={event.title} date={event.date} id={event.id}/>
                )
            })
          }
        </Grid>
      </Stack></Fade>
    </Stack>
  )  
}export default Transition(News);
