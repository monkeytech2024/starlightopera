import React from 'react'

import {Stack, Grid,Typography} from "@mui/material";

import {} from "@mui/material";


import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
function News() {

    return (
    <Grid
      id={'news'}
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

<PageHeader weight={1.5}>News</PageHeader>
<PageContent>Coming Soon </PageContent>
    </Grid>
    )
}

export default News
