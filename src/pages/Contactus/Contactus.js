import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";

import {} from "@mui/material";

import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';


function Contactus () {

    return (
    <Grid
      id={'contactandsupport'}
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
            <PageHeader weight={2.5}>Contact and Support</PageHeader>
            <PageContent>Coming Soon </PageContent>
    </Grid>
    )
}

export default Contactus
