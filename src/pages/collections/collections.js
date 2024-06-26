
import { useTranslation } from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import React from 'react'
import {Stack, Grid} from "@mui/material";
import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';

function Collections() 
{
  const {t} = useTranslation();
  return (
    
    <Stack direction="column"  sx={{minHeight: "65vh",backgroundColor: "background.main"}}>
      <PageHeader weight={t("NavBar.Collections.length")}>{t("NavBar.Collections.title")}</PageHeader>
      <PageContent>{t("General.ComingSoon")}</PageContent>
    </Stack>
  )
}export default Transition(Collections);


