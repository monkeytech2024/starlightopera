
import { useTranslation } from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import React from 'react'
import {Fade, Button, Box, Typography, Stack, Grid} from "@mui/material";
import {} from "@mui/material";
import {InstagramEmbed } from 'react-social-media-embed';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { useNavigate, useParams } from "react-router-dom";
import ADs from "../../assets/data/bioAD.json";
import BDs from "../../assets/data/bioBD.json";
import Presidents from "../../assets/data/bioPresident.json";
import Instructors from "../../assets/data/bioInstructor.json";
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';
const getBioFromJson = (id) =>
{
  let goodBio = null;
  Presidents.map((bio)=>{
      
        if(id===bio.id)
        {
           return goodBio = bio;
        }
    })
    BDs.map((bio)=>{
      
      if(id===bio.id)
      {
         return goodBio = bio;
      }
  })
  ADs.map((bio)=>{
      
    if(id===bio.id)
    {
       return goodBio = bio;
    }
})
Instructors.map((bio)=>{
      
  if(id===bio.id)
  {
     return goodBio = bio;
  }
})
    return goodBio;
}







function Bios() 
{
  const { id } = useParams();
  const {t} = useTranslation();

  const bio = getBioFromJson(id);
  const navigate = useNavigate();
if(bio ===null)
  {
    return <Navigate to={{pathname: "/Error"}}/>;
  }
  return (
    
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65.5vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
        <Stack direction="column" height="100%" width={{lg:"75%", md:"95%", xs:"95%"}}>
        <Stack direciton="row" justifyContent="flex-start" fontSize={{lg:"24px", md:"20px", xs:"14px"}} marginTop={{lg: "4vh", md: '3vh', xs:"2vh"}}> 
              <NavLink onClick={() => navigate(-1)}style={{textUnderlineOffset:"0.5vh", color:"#000000", fontSize:"100%"}}class="backclass">{t("General.Back")}</NavLink>
           </Stack>
           <Grid container spacing={{lg:"30px", md:"30px", xs:"20px"}} marginTop={{lg: "1vh", md: '1vh', xs:"1vh"}} marginBottom={{lg: "2.5vh", md: '1vh', xs:"1vh"}}>
           <Grid item lg={4} md={6} xs={12}>
              
                  <Box component="img" sx={{height: "auto", display: 'block', width: "100%", overflow: 'hidden'}} src={bio.thumbnail} alt={bio.name}/>
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              
            <Typography sx={{fontWeight:"400", color:"primary.darkred", fontSize:{lg:"56px", md: "24px", xs:"18px"}}}>{bio.name}</Typography>
        </Grid>
           </Grid>
        </Stack>
      </Fade>
    </Stack>
  )
}export default Transition(Bios);


