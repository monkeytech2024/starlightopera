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
function Contactus () {
  const { t } = useTranslation();
    return (
    <Grid
      id={'contactandsupport'}
      container
      direction="column"
      justifyContent="flex-start"
      sx={{

        height: "auto",
        color: "black",

        backgroundColor: "background.main",
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >
            <PageHeader weight={t("NavBar.ContactUs.length")}>{t("NavBar.ContactUs.title")}</PageHeader>
            <Grid marginTop={{md:"8vh", sx:"5vh"}} direction="row"  minHeight={{md:"80vh", xs:"30vh"}} container>

              <Grid item md={2} xs={12}/>
              <Grid item md={3} xs={12}>
                <Stack direction="column" spacing={1} margin={2}>
                  <Stack direction="row" paddingBottom={4}>
                    <Typography fontWeight="400" fontSize={{md:"2.3rem", xs:"2rem"}} sx={{textDecoration:"underline", textUnderlineOffset:"1.25vh"}}color="primary.darkred" > {t("ContactUs.Contact")}&nbsp;&nbsp;</Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={2}>
                    <Typography variant="h6" color="#FF0000" ><LocalPhoneOutlinedIcon fontSize='medium'/></Typography>
                    <Typography fontSize={{md:"1.3rem", xs:"1rem"}} color="#000000">+1 (647) 887 1393 </Typography>
                  </Stack>
                  <Stack direction="row"spacing={2}>
                    <Typography variant="h6" color="#FF0000" ><EmailOutlinedIcon fontSize='medium'/></Typography>
                    <Typography fontSize={{md:"1.3rem", xs:"1rem"}} color="#000000" >info@starlightopera.com </Typography>
                  </Stack>
                  <Stack direction="row"spacing={2}>
                    <Typography variant="h6" color="#FF0000" ><LocationOnOutlinedIcon fontSize='medium'/></Typography>
                    <Typography fontSize={{md:"1.3rem", xs:"1rem"}} color="#000000" >Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={0.5} xs={12}/>
              <Grid item md={4.5} xs={12} paddingTop={2}>
              <Stack direction="row"  justifyContent={{md:"flex-end", xs:"center"}} width={{md:"40vw", xs:"100vw"}} height={{md:"40vw", xs:"100vw"}} >

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.9878966608203!2d-79.43069!3d43.8975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7297a6aaaa9%3A0x72cf86215e2e6256!2sStarlight%20Chinese%20Opera!5e0!3m2!1sen!2sca!4v1719114581717!5m2!1sen!2sca" width="90%" height="90%" frameBorder={0} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</Stack>
                  </Grid>
            </Grid>


      <Grid marginTop={{md:"8vh", sx:"1vh"}} direction="row" height={{md:"90vh", xs:"160vh"}} container>
        <Grid item md={2} xs={12}/>
        <Grid item md={4.5} xs={12}>
          <Stack direction="column" spacing={2} margin={2}>
            <Stack direction="row"spacing={2} paddingBottom={3}>
              <Typography fontWeight="400" fontSize={{md:"2.3rem", xs:"2rem"}} color="primary.darkred"sx={{textDecoration:"underline", textUnderlineOffset:"1.25vh"}} >{t("ContactUs.SupportUs")}&nbsp;&nbsp;</Typography>
            </Stack>
            <Stack direction="row"spacing={2}>
              <Typography  fontSize={{md:"1.3rem", xs:"1rem"}} color="#000000" >{t("ContactUs.SupportText")} </Typography>
            </Stack>

            <Stack direction="row" spacing={3} paddingTop={2}>
              <img width="100vh" height="100vh"   alt="Interac" src={Interac}></img>
                <Stack direction="column" spacing={1}> 
                <Stack direction="row"spacing={1}>
      <Typography variant="h6" fontSize={{md:"1.4rem", xs:"1.1rem"}} color="#000000" >{t("ContactUs.Method-1")} </Typography>
      <Typography variant="h6" fontSize={{md:"1.4rem", xs:"1.1rem"}} color="#000000" >{t("ContactUs.Method-1-Title")} </Typography>
    </Stack>
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-1-Step1")} </Typography>
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-1-Step2")} </Typography>  
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-1-Step3")} </Typography>

      </Stack>
    </Stack>
    
    <Stack direction="row" spacing={3} paddingTop={2}>
    <img width="100vh" height="100vh"   alt="Interac" src={Paypal}></img>
      <Stack direction="column" spacing={1}>
 <Stack direction="row"spacing={1}>
      <Typography variant="h6" fontSize={{md:"1.4rem", xs:"1.1rem"}} color="#000000" >{t("ContactUs.Method-2")} </Typography>
      <Typography variant="h6" fontSize={{md:"1.4rem", xs:"1.1rem"}} color="#000000" >{t("ContactUs.Method-2-Title")} </Typography>
    </Stack>
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-2-Step1")} </Typography>
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-2-Step2")} </Typography>  
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-2-Step3")} </Typography>
      <Typography fontSize={{md:"1.2rem", xs:"0.9rem"}} color="#000000" >{t("ContactUs.Method-2-Step4")} </Typography>
      </Stack>
    </Stack>

  </Stack>
</Grid>
<Grid item md={0.5} sx={12}/>
<Grid item md={3} sx={12}>
<Stack direction="row"  justifyContent={{md:"flex-end", xs:"center"}}>
  <img  width="90%" height="90%" alt="Interac" src={SupportUsImg}></img>
</Stack>

<Grid item md={2}/>

    </Grid>
 <Grid item md={2}/>
</Grid>
    </Grid>

    )
}

export default Transition(Contactus);
