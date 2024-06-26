import React from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import ICON from "../../assets/images/ICON.png";
import ContactBar from '../ContactBar/ContactBar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useTranslation } from 'react-i18next';
export default function Copyright() 
{
  const { t } = useTranslation();
  return (
    <Stack direction="row"  justifyContent="center" height="30vh" minHeight="30vh" sx={{alignContent:"center", justifyContent:"center", bgcolor: 'background.navbar'}}>
      <Stack marginTop="3vh" direction="column" height="85%" width="85%">
        <Stack direction="row" width="100%" height={{md:"30%", xs:"20%"}} justifyContent="space-between">
          <Typography variant="h1" fontSize={{md:"2.5vh", xs:"2vh"}} >{t("Footer.ContactUs")}</Typography>
          <img width="auto" height="100%"  class="ICON"  alt="Starlight Chinese Opera" src={ICON}></img>
        </Stack>
        <Stack direction="row" width="100%" height={{md:"15%", xs:"12.5%"}} justifyContent="flex-start" spacing="0.5vw">
          <LocalPhoneOutlinedIcon sx={{color: "primary.main", fontSize:{md:"1.8vh", xs:"1.8vh"}}}/>
          <Typography variant="body1" fontSize={{md:"1.5vh", xs:"1.3vh"}}>+1 (647) 887 1393</Typography>
        </Stack>
        <Stack direction="row" width="100%" height={{md:"15%", xs:"12.5%"}} justifyContent="flex-start" spacing="0.5vw">
          <EmailOutlinedIcon sx={{color: "primary.main", fontSize:{md:"1.8vh", xs:"1.8vh"}}}/>
          <Typography variant="body1" fontSize={{md:"1.5vh", xs:"1.3vh"}}>info@starlightopera.com</Typography>
        </Stack>
        <Stack direction="row" width="100%" height={{md:"15%", xs:"12.5%"}} justifyContent="flex-start" spacing="0.5vw">
          <LocationOnOutlinedIcon sx={{color: "primary.main", fontSize:{md:"1.8vh", xs:"1.8vh"}}}/>
          <Typography variant="body1" fontSize={{md:"1.5vh", xs:"1.3vh"}}>Unit 40, 588 Edward Ave. Richmond Hill, L4C 9Y6</Typography>
        </Stack>
        <Stack width="100%" height={{md:"20%", xs:"12.5%"}}/>
        <Stack direction={{md:"row", xs:"column"}} height={{md:"15%", xs:"30%"}}>
          <Stack width="100%" height="45%" marginBottom="5%" alignItems={{md:"flex-start", xs:"center"}}>
            <ContactBar/>
          </Stack>
          <Stack width="100%" height="45%"  alignItems={{md:"flex-end", xs:"center"}}>
            <Typography variant="body1" fontSize={{md:"1.5vh", xs:"1.3vh"}}>{t("Footer.Copyright-prefix")}{new Date().getFullYear()}{t("Footer.Copyright-suffix")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}