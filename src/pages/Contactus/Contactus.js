import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";

import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';


function Contactus () {
  const { t } = useTranslation();
    return (
    <Grid
      id={'contactandsupport'}
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
            <PageHeader weight={t("NavBar.ContactUs.length")}>{t("NavBar.ContactUs.title")}</PageHeader>
            <PageContent>{t("General.ComingSoon")} </PageContent>
    </Grid>
    )
}

export default Contactus
