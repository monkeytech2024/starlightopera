import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
import Transition from '../../components/Transition/Transition';

import Carousel from "../../components/Carousel/Carousel";





function Home() {
  const { t } = useTranslation();


  return (
    <Grid
      id={'gallery'}
      container
      direction="column"
      justifyContent="flex-start"
      sx={{
        minHeight: "70vh",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >
<div className="App">
      <Carousel/>
    </div>
<PageHeader weight={t("NavBar.Home.length")}>{t("NavBar.Home.title")}</PageHeader>
<PageContent>{t("General.ComingSoon")} </PageContent>
    </Grid>
    )
}

export default Transition(Home);
