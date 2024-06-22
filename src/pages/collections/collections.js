import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import React from 'react'
import {Divider, Stack, Grid,Typography} from "@mui/material";
import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
/*
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">

    </Suspense>
  )
}

*/





function Collections() {
//const { t, i18n } = useTranslation();
    return (
 //<p>{t(general.commingsoon)}</p>
    <Grid
      id={'collections'}
      container
      direction="column"
      justifyContent="flex-start"
      sx={{
        minHeight: "100vh",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >

<PageHeader weight={1.5}>Collections</PageHeader>
<PageContent>Coming Soon </PageContent>
    </Grid>
    )
}export default Collections


