import React from 'react'

import {Button, Fade, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import Interac from "../../assets/images/ContactUs/Interac.png";
import Paypal from "../../assets/images/ContactUs/Paypal.png";
import SupportUsImg from "../../assets/images/ContactUs/SupportUs.jpg";
import PageHeader from '../../components/PageHeader/PageHeader';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Transition from '../../components/Transition/Transition';
const handleClick = (dest) => {
  window.open(dest);
};
function Contactus () 
{
  const {t} = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
      <Stack direction="column" height="100%" width={{lg:"70%", md:"95%", xs:"95%"}}>
        <PageHeader weight={t("NavBar.ContactUs.length")}>{t("NavBar.ContactUs.title")}</PageHeader>
        <Typography variant="h2" fontSize={{lg:"36px", md:"36px", xs:"24px"}} sx={{textDecoration:"underline", textUnderlineOffset:"1.25vh"}} >{t("ContactUs.Contact")}</Typography>
        <Grid container direction="row" >
          <Grid item lg={4.5} md={12} xs={12} minHeight={{lg:"35vw", md:"10vh", xs:"10vh"}} marginTop={5} >
            <Stack direction="column"  spacing={2} justifyContent="flex-start">
              <Stack direction="row" spacing={2}>
                <LocalPhoneOutlinedIcon sx={{color: "primary.red"}} fontSize='medium'/>
                <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>+1 (647) 887 1393</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <EmailOutlinedIcon sx={{color: "primary.red"}} fontSize='medium'/>
                <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>info@starlightopera.com</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <LocationOnOutlinedIcon sx={{color: "primary.red"}} fontSize='medium'/>
                <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={7.5} md={12} xs={12} marginTop={5} minHeight={{lg:"40vw", md:"90vw", xs:"100vw"}}>
            <Stack direction="row" width="100%"height="100%" justifyContent={{lg:"flex-end", md:"center", xs:"center"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.9878966608203!2d-79.43069!3d43.8975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7297a6aaaa9%3A0x72cf86215e2e6256!2sStarlight%20Chinese%20Opera!5e0!3m2!1sen!2sca!4v1719114581717!5m2!1sen!2sca" width="90%" height="90%" frameBorder={0} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </Stack>
          </Grid>
        </Grid>   
       
      </Stack>
      </Fade>
  </Stack>
  )
} export default Transition(Contactus);
