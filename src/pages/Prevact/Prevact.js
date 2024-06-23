import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";
import {} from "@mui/material";
import { useTranslation } from 'react-i18next';

import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
function PrevAct() {
  const { t } = useTranslation();
    return (
    <Grid
      id={'prevact'}
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
      <PageHeader weight={t("NavBar.PrevAct.length")}>{t("NavBar.PrevAct.title")}</PageHeader>
      <PageContent>{t("General.ComingSoon")} </PageContent>
    </Grid>
    )
}

export default PrevAct
