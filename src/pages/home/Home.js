import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
import Transition from '../../components/Transition/Transition';

import {Carousel} from "../../components/Carousel/Carousel";
import img1 from "../../assets/images/banner.jpg";
import img2 from "../../assets/images/banner.jpg";
import img3 from "../../assets/images/ICON.png";





function Home() {
  const { t } = useTranslation();
  const slides = [ {
    "src": img1,
  },
  {
    "src": img2,
  },
  {
    "src": img3,
  }];

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
      <Carousel data={slides} />
    </div>
<PageHeader weight={t("NavBar.Home.length")}>{t("NavBar.Home.title")}</PageHeader>
<PageContent>{t("General.ComingSoon")} </PageContent>
    </Grid>
    )
}

export default Transition(Home);
