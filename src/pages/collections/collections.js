import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import React from 'react'
import {Stack, Grid,Typography} from "@mui/material";

import {} from "@mui/material";

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
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >


<Stack direction="row" justifyContent="center"><Typography  sx={{color:"black", typography: "h6",fontSize: 36 }}>Collection Page</Typography></Stack>
    </Grid>
    )
}export default Collections


