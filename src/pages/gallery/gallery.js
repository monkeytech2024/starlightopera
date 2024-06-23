import React from 'react'

import {Divider, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";

import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';


function Gallery() {
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

<PageHeader weight={t("NavBar.Gallery.length")}>{t("NavBar.Gallery.title")}</PageHeader>
<PageContent>{t("General.ComingSoon")} </PageContent>
    </Grid>
    )
}

export default Gallery
