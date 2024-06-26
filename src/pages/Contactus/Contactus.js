import React from 'react'

import {Divider, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import Interac from "../../assets/images/ContactUs/Interac.png";
import Paypal from "../../assets/images/ContactUs/Paypal.png";
import SupportUsImg from "../../assets/images/ContactUs/SupportUs.jpg";
import PageHeader from '../../components/PageHeader/PageHeader';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Transition from '../../components/Transition/Transition';

function Contactus () 
{
  const {t} = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65vh", backgroundColor:"background.main"}}>
    <Stack direction="column" height="100%" width={{md:"70%", xs:"95%"}}>
      <PageHeader weight={t("NavBar.ContactUs.length")}>{t("NavBar.ContactUs.title")}</PageHeader>
      <Typography variant="h2" marginTop="5.5vh" fontSize={{md:"2.3rem", xs:"2rem"}} sx={{textDecoration:"underline", textUnderlineOffset:"1.25vh"}} >{t("ContactUs.Contact")}&nbsp;&nbsp;</Typography>
      <Grid container direction="row" >
        <Grid item md={4.5} xs={12} minHeight={{md:"35vw", xs:"10vh"}} marginTop={5} >
          <Stack direction="column"  spacing={2} justifyContent="flex-start">
            <Stack direction="row" spacing={2}>
              <LocalPhoneOutlinedIcon sx={{color: "primary.red"}} fontSize='medium'/>
              <Typography variant="body1" fontSize={{md:"1.2rem", xs:"1rem"}}>+1 (647) 887 1393</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <EmailOutlinedIcon sx={{color: "primary.red"}} fontSize='medium'/>
              <Typography variant="body1" fontSize={{md:"1.2rem", xs:"1rem"}}>info@starlightopera.com</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <LocationOnOutlinedIcon sx={{color: "primary.red"}} fontSize='medium'/>
              <Typography variant="body1" fontSize={{md:"1.2rem", xs:"1rem"}}>Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={7.5} xs={12} marginTop={5} minHeight={{md:"40vw", xs:"100vw"}}>
          <Stack direction="row" height="100%" justifyContent={{md:"flex-end", xs:"center"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.9878966608203!2d-79.43069!3d43.8975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7297a6aaaa9%3A0x72cf86215e2e6256!2sStarlight%20Chinese%20Opera!5e0!3m2!1sen!2sca!4v1719114581717!5m2!1sen!2sca" width="90%" height="90%" frameBorder={0} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </Stack>
         </Grid>
      </Grid>   
      <Typography variant="h2" fontSize={{md:"2.3rem", xs:"2rem"}} sx={{textDecoration:"underline", textUnderlineOffset:"1.25vh"}} >{t("ContactUs.SupportUs")}&nbsp;&nbsp;</Typography>
      <Grid container direction={{md:"row", xs:"column-reverse"}} marginTop={5}>
        <Grid item md={6} xs={12} minHeight={{md:"35vw", xs:"60vh"}} >
          <Stack direction="row"spacing={2}>
            <Typography variant="body1" fontSize={{md:"1.2rem", xs:"1rem"}}>{t("ContactUs.SupportText")} </Typography>
          </Stack>
          <Stack direction="row" spacing={3} marginTop={5}>
            <img width="100vh" height="100vh" alt="Interac" src={Interac}/>
            <Stack direction="column" spacing={2}> 
              <Stack direction="row"spacing={1}>
                <Typography variant="h1" fontSize={{md:"1.3rem", xs:"1.1rem"}}>{t("ContactUs.Method-1")}</Typography>
                <Typography variant="h1" fontSize={{md:"1.3rem", xs:"1.1rem"}}>{t("ContactUs.Method-1-Title")}</Typography>
              </Stack>
              <Stack direction="column" spacing={1}>
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-1-Step1")}</Typography>
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-1-Step2")}</Typography>  
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-1-Step3")}</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={3} marginTop={5}>
            <img width="100vh" height="100vh" alt="Paypal" src={Paypal}/>
            <Stack direction="column" spacing={2}> 
              <Stack direction="row"spacing={1}>
                <Typography variant="h1" fontSize={{md:"1.4rem", xs:"1.1rem"}}>{t("ContactUs.Method-2")}</Typography>
                <Typography variant="h1" fontSize={{md:"1.4rem", xs:"1.1rem"}}>{t("ContactUs.Method-2-Title")}</Typography>
              </Stack>
              <Stack direction="column" spacing={1}>
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-2-Step1")}</Typography>
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-2-Step2")}</Typography>  
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-2-Step3")}</Typography>
                <Typography variant="body1" fontSize={{md:"1.2rem", xs:"0.9rem"}}>{t("ContactUs.Method-2-Step4")}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} minHeight={{md:"35vw", xs:"32.5vh"}}>
          <Stack direction="row"  justifyContent={{md:"flex-end", xs:"center"}}>
            <img width="95%" alt="Support Us" src={SupportUsImg}/>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  </Stack>
  )
} export default Transition(Contactus);
