import React from 'react'

import {Button, Fade, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import Interac from "../../assets/images/ContactUs/Interac.png";
import Paypal from "../../assets/images/ContactUs/Paypal.png";
import Paypal_Desktop from "../../assets/images/ContactUs/Paypal_Desktop.png";
import SupportUsImg from "../../assets/images/ContactUs/SupportUs.jpg";
import PageHeader from '../../components/PageHeader/PageHeader';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Transition from '../../components/Transition/Transition';
const handleClick = (dest) => {
  window.open(dest);
};
function SupportUs() 
{
  const {t} = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"60vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
      <Stack direction="column" height="100%" width={{lg:"70%", md:"95%", xs:"95%"}}>
        <PageHeader weight={t("NavBar.SupportUs.length")}>{t("NavBar.SupportUs.title")}</PageHeader>


        <Grid container direction={{lg:"row", md:"row", xs:"row"}} marginTop={{lg:"3vh", md:"2vh", xs:"1vh"}}>
        <Grid item lg={12} md={12} xs={12} marginBottom={{lg:"5vh", md: "0vh", xs:"0vh"}} >
            <Stack direction="row"  justifyContent={{lg:"flex=end", md:"center", xs:"center"}}>
              <img width="95%" alt="Support Us" src={SupportUsImg}/>
            </Stack>
          </Grid>

          <Grid item lg={12} md={12} xs={12} marginTop={{lg:"0vh", md:"2vh", xs:"2vh"}} marginBottom={{lg:"5vh", md:"2vh", xs:"2vh"}} >
          <Typography variant="body1" fontSize={{lg:"24px", md:"20px", xs:"18px"}}>{t("ContactUs.SupportText")}</Typography>
            

            <Stack direction="row" spacing={3} marginTop={5}>
              <Stack direction="column" width={{lg:"15%", md: "15%", xs:"25%"}} spacing={2}>
              <img width="100%" height="auto" alt="Interac" src={Interac}/>
              <Stack direction="row" display={{lg:"none", md:"flex", xs:"flex"}}>
              </Stack>
              </Stack>
              <Stack direction="column" width={{lg:"80%", md: "80%", xs:"70%"}} spacing={2}> 
                <Stack direction="row"spacing={1}>
                    <Typography variant="h1" fontSize={{lg:"24px", md:"24px", xs:"20px"}}>{t("ContactUs.Method-1")}</Typography>
                </Stack>
                <Stack direction="column" spacing={1}>
                <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-1-Step1")}</Typography>
                    <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-1-Step2")}</Typography>  
                    <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-1-Step3")}</Typography>
                </Stack>
              </Stack>
            </Stack>            
            
            
            <Stack direction="row" spacing={3} marginTop={5}>
              <Stack direction="column" width={{lg:"15%", md: "15%", xs:"25%"}} spacing={2}>

              <Stack display={{lg:"none", md:"flex", xs:"flex"}}>
                <img width="100%" height="auto" alt="Paypal" src={Paypal}/>
                </Stack>
                <Stack display={{lg:"flex", md:"none", xs:"none"}}>
                <img width="100%" height="auto" alt="Paypal" src={Paypal_Desktop}/>
                </Stack>
              
              <Stack direction="row" display={{lg:"none", md:"flex", xs:"flex"}}>
              <Button 
  variant="contained"
 href="https://www.paypal.com/qrcodes/managed/f48af8f7-6bde-4890-9aff-aee0e0437664?utm_source=payandgetpaid"
  sx={{
    width:{lg:"130px", md:"100%", xs:"100%"},
    height:{lg:"40px", md:"40px", xs:"50px"},
    bgcolor:"#ffffff",
    borderRadius:"10%",
    color:'#000000',
    textTransform: 'none',
    textAlign:"center",
    fontSize:{lg:"18px", md:"18px", xs:"13px"},
    fontWeight:"600",
    "&:hover": {
      bgcolor:"#ee0000",
      borderRadius:"10px",
      color:'#ffffff',
      transform: 'scale(1.1)',
    },
  }}
>
  {t("ContactUs.SupportNow")}
</Button>
              </Stack>
              </Stack>
              <Stack direction="column" spacing={2} width={{lg:"80%", md: "80%", xs:"70%"}}> 
                <Stack direction="row"spacing={1}>
                  <Typography variant="h1" fontSize={{lg:"24px", md:"24px", xs:"20px"}}>{t("ContactUs.Method-2")}</Typography>
                </Stack>
                <Stack direction="column" spacing={1}>
                  <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-2-Step1")}</Typography>
                  <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-2-Step2")}</Typography>  
                  <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-2-Step3")}</Typography>
                  <Typography variant="body1" fontSize={{lg:"20px", md:"20px", xs:"18px"}}>{t("ContactUs.Method-2-Step4")}</Typography>
                </Stack>
              </Stack>
            </Stack>


          </Grid>

        </Grid>
      </Stack>
      </Fade>
  </Stack>
  )
} export default Transition(SupportUs);
