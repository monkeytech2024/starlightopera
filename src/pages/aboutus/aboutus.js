import React from 'react'
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";
import {} from "@mui/material";
import { useTranslation } from 'react-i18next';

import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';


function Aboutus() {
  const { t } = useTranslation();
    return (
    <Stack
      id={'abountus'}
      direction="column"

      sx={{
        minHeight: "70vh",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}alignItems="center"
      justifyContent="flex-start"> 
      

      <PageHeader weight={t("NavBar.AboutUs.length")}>{t("NavBar.AboutUs.title")}</PageHeader>
      <PageContent>{t("General.ComingSoon")}</PageContent>
 
    </Stack>
    )
}

export default Aboutus