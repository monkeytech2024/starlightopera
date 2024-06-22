import React from 'react'
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";
import {} from "@mui/material";


import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';


function Aboutus() {

    return (
    <Stack
      id={'abountus'}
      direction="column"

      sx={{
        minHeight: "100vh",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}alignItems="center"
      justifyContent="flex-start"> 
      

      <PageHeader weight={1.5}>About Us</PageHeader>
      <PageContent>Coming Soon </PageContent>
 
    </Stack>
    )
}

export default Aboutus