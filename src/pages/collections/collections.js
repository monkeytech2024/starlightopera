import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import React from 'react'
import {Divider, Stack, Grid,Typography} from "@mui/material";
import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';





function Collections() {

    const { t } = useTranslation();

    return (

    <Grid
      id={'collections'}
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

<PageHeader weight={t("NavBar.Collections.length")}>{t("NavBar.Collections.title")}</PageHeader>
<PageContent>{t("General.ComingSoon")}</PageContent>
    </Grid>
    )
}export default Transition(Collections);


