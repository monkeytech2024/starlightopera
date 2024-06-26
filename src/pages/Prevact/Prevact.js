import React from 'react'
import {Stack} from "@mui/material";
import {} from "@mui/material";
import {useTranslation} from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';

function PrevAct() 
{
  const {t} = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65vh", backgroundColor:"background.main"}}>
      <Stack direction="column" height="100%" width={{md:"75%", xs:"100%"}}>
        <PageHeader weight={t("NavBar.PrevAct.length")}>{t("NavBar.PrevAct.title")}</PageHeader>
        <PageContent>{t("General.ComingSoon")} </PageContent>
      </Stack>
    </Stack>
  )
}export default Transition(PrevAct);
