import React from 'react';
import {Link, Stack, Typography} from "@mui/material";

import ContactBar from './ContactBar';

export default function Copyright() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-evenly" alignItems="Center" sx={{ minHeight: "80vh",background:"#F2E7E7", my: 4 }}>
      <ContactBar />
      <Typography variant="body1" color="text.secondary" >
        {'© '}
        <Link color="inherit" href="#">
        </Link>{' '}
        {new Date().getFullYear()}
        {' Starlight Chinese Opera, all rights reserved'}
      </Typography>
    </Stack>
  );
}