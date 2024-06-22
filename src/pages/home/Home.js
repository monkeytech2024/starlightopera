import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";

import {} from "@mui/material";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';




function Home() {

    return (
    <Grid
      id={'home'}
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
      <PageHeader weight={1.5}>Home</PageHeader>
      <PageContent>Coming Soon </PageContent>
 
    </Grid>
    )
}

export default Home
