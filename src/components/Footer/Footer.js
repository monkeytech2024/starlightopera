import React from 'react';
import {Grid,Link, Stack, Typography} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import ContactBar from '../ContactBar/ContactBar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useTranslation } from 'react-i18next';
export default function Copyright() {
  const { t } = useTranslation();
  return (

    <Stack 
    
    
    sx={{

      color: "white",
      bgcolor: 'background.navbar',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <Grid container  justifyContent="space-evenly"  spacing={2}   sx={{
      minHeight: "35vh",
      display: { xs: 'none', md: 'flex' }
    }}>
    <Grid item md={1.5}/>
     <Grid container item md={4.5} direction="column" justifyContent="space-evenly">
      <Grid item md={1}/>
    <Grid item md={2}>
      <Stack direction="row" justifyContent="flex-start">
          <Typography fontWeight="400" color="#000000" fontSize="2vh" > {t("Footer.ContactUs")}</Typography>
      </Stack>
    </Grid>
    <Grid item md={1.1}>
    <Stack direction="row" justifyContent="flex-start" spacing="1vh"><LocalPhoneOutlinedIcon sx={{color: "primary.main", fontSize:"1.8vh"  } }/><Typography  color="#000000"  fontSize={{md:"1vh", lg:"1.3vh"}}>+1 (647) 887 1393 </Typography></Stack></Grid>
    <Grid item md={1.1}>
    <Stack direction="row" justifyContent="flex-start" spacing="1vh"><EmailOutlinedIcon sx={{color: "primary.main", fontSize:"1.8vh"  } }/><Typography  color="#000000" fontSize={{md:"1vh", lg:"1.3vh"}}>info@starlightopera.com </Typography></Stack></Grid>
    <Grid item md={1.1}>
    <Stack direction="row" justifyContent="flex-start" spacing="1vh"><LocationOnOutlinedIcon sx={{color: "primary.main", fontSize:"1.8vh" } }/><Typography  color="#000000" fontSize={{md:"1vh", lg:"1.3vh"}}>Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography></Stack></Grid>
    
    <Grid item md={3.2}/>
    <Grid item md={2.5}><Stack direction="row" justifyContent="flex-start"><ContactBar /></Stack></Grid>
  </Grid>
  <Grid container item md={4.5} direction="column" justifyContent="space-evenly">
  <Grid item md={1}></Grid>
  <Grid item md={5}><Stack direction="row" justifyContent="flex-end"><img width="13%" height="13%"  class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img></Stack></Grid>
  <Grid item md={4}></Grid>
  <Grid item md={2}><Stack direction="row" justifyContent="flex-end"><Typography variant="body1" color="#000000"fontSize={{md:"1vh", lg:"1.3vh"}} >
    
        {t("Footer.Copyright-prefix")}
        {new Date().getFullYear()}
        {t("Footer.Copyright-suffix")}
      </Typography></Stack></Grid>
  </Grid>


  <Grid item md={1.5}></Grid></Grid>
<Grid container direction="row" sx={{
      minHeight: "20rem",
      display: { xs: 'flex', md: 'none' }
    }}>
  <Grid item xs={1}/>
  <Grid container item xs={10} justifyContent="space-evenly"  direction="column"    >
    <Grid item xs={0.5}/>
     <Grid item xs={0.75}>
      <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight="400" color="#000000" fontSize="2vh" > {t("Footer.ContactUs")}</Typography>
          <img width="15%" height="15%"  class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img>
      </Stack>
      </Grid>
      
    <Grid item xs={1}>
    <Stack direction="row" justifyContent="flex-start" spacing="1vh"><LocalPhoneOutlinedIcon sx={{color: "primary.main", fontSize:"1.8vh"  } }/><Typography  color="#000000"  fontSize="1.3vh">+1 (647) 887 1393 </Typography></Stack></Grid>
    <Grid item xs={1}>
    <Stack direction="row" justifyContent="flex-start" spacing="1vh"><EmailOutlinedIcon sx={{color: "primary.main", fontSize:"1.8vh"  } }/><Typography  color="#000000" fontSize="1.3vh">info@starlightopera.com </Typography></Stack></Grid>
    <Grid item xs={1}>
    <Stack direction="row" justifyContent="flex-start" spacing="1vh"><LocationOnOutlinedIcon sx={{color: "primary.main", fontSize:"1.8vh" } }/><Typography  color="#000000" fontSize="1.3vh">Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography></Stack></Grid>
    
    <Grid item xs={1.75}/>
    <Grid item xs={1.75}><Stack direction="row" justifyContent="center"><ContactBar /></Stack></Grid>
  <Grid item xs={1.75}><Stack direction="row" justifyContent="center"><Typography variant="body1" color="#000000"fontSize="1.3vh" >
    
        {t("Footer.Copyright-prefix")}
        {new Date().getFullYear()}
        {t("Footer.Copyright-suffix")}
      </Typography></Stack></Grid>
      <Grid item xs={0.5}/>
  </Grid>


  <Grid item md={1}/>
  </Grid>
    </Stack>
  );
}