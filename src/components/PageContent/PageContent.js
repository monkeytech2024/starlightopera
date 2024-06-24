import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";

const PageContent = ({ children }) => {

    return (

      <Grid item md={12} xs={12} marginTop={"20vh"}container alignItems="center" justifyContent="center">
      <Stack direction="row" width={{md:"20vw", xs:"80vw"}}justifyContent="center">
      <Typography  fontWeight={{md:"400", xs:"500"}} color="primary.grey" fontSize={{md:"2vw", xs:"8vw"}}>{children}</Typography>

    </Stack>
    </Grid>


    );
   };
   export default PageContent;