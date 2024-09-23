
import { useTranslation } from 'react-i18next';
import Transition from '../../components/Transition/Transition';
import React from 'react'
import {Fade, Button, Box, Typography, Stack, Grid} from "@mui/material";
import {} from "@mui/material";
import {InstagramEmbed } from 'react-social-media-embed';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { useNavigate, useParams } from "react-router-dom";
import events from "../../assets/data/event.json";
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';
const getEventFromJson = (id) =>
{
  let goodEvent = null;
    events.map((event)=>{
      
        if(id===event.id)
        {
           return goodEvent = event;
        }
    })
    return goodEvent;
}

const handleClick = (dest) => {
  window.open(dest);
};

function getWeekday(weekday) {
  if (weekday.length===0) {
    return <></>;
  }
  return <Stack direciton="column" spacing={{lg:"5px", md:"5px", xs:"5px"}}>
   <Typography sx={{fontWeight:"600", color:"#CC0000", fontSize:{lg:"24px", md: "20px", xs:"20px"}}}>{t("Event.date")}</Typography>
   <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"20px", md: "20px", xs:"16px"}}}>{t(weekday)}</Typography> 
  </Stack>;
}

function getVenue(venue) {
  if (venue.length===0) {
    return <></>;
  }
  return <Stack direciton="column" spacing={{lg:"5px", md:"5px", xs:"5px"}}>
   <Typography sx={{fontWeight:"600", color:"#CC0000", fontSize:{lg:"24px", md: "24px", xs:"20px"}}}>{t("Event.venue")}</Typography>
   <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"20px", md: "20px", xs:"16px"}}}>{t(venue)}</Typography> 
  </Stack>;
}

function getTime(time) {
  if (time.length===0) {
    return <></>;
  }
  return <Stack direciton="column">
   <Typography sx={{fontWeight:"600", color:"#CC0000", fontSize:{lg:"24px", md: "24px", xs:"20px"}}}>{t("Event.time")}</Typography>
   <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"20px", md: "20px", xs:"16px"}}}>{t(time)}</Typography> 
  </Stack>;
}

function getTicket(ticket) {
  if (ticket.length===0) {
    return <></>;
  }
  return <Stack direciton="column">
   <Typography sx={{fontWeight:"600", color:"#CC0000", fontSize:{lg:"24px", md: "24px", xs:"20px"}}}>{t("Event.ticket")}</Typography>
   <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"20px", md: "20px", xs:"16px"}}}>{t(ticket)}</Typography> 
  </Stack>;
}

function getTicketing(ticketing, isticketable) {
  if (ticketing.length===0) {
    return <></>;
  }
  return     <Button 
  variant="contained"
  href={ticketing}
  disabled={!isticketable}
  sx={{
    width:{lg:"300px", md:"300px", xs:"300px"},
    height:{lg:"45px", md:"45px", xs:"45px"},
    
    bgcolor:"#ffffff",
    borderRadius:"10px",
    color:'#ee0000',
    textTransform: 'none',
    fontSize:{lg:"18px", md:"18px", xs:"18px"},
    fontWeight:"600",
    "&:hover": {
      bgcolor:"#ee0000",
      borderRadius:"10px",
      color:'#ffffff',
      transform: 'scale(1.1)',
    },
  }}
>
{t("Events.BuyTickets-prefix")}&nbsp;<WhatsappIcon/>&nbsp;{t("Events.BuyTickets-suffix")}
</Button>;
}


function getLink(link) {
  if (link.length===0) {
    return <></>;
  }
  return     <Button 
  variant="contained"
  href={link}
  sx={{
    width:{lg:"160px", md:"160px", xs:"160px"},
    height:{lg:"45px", md:"45px", xs:"45px"},
    bgcolor:"#ffffff",
    borderRadius:"10px",
    color:'#ee0000',
    textTransform: 'none',
    fontSize:{lg:"18px", md:"18px", xs:"18px"},
    fontWeight:"600",
    "&:hover": {
      bgcolor:"#ee0000",
      borderRadius:"10px",
      color:'#ffffff',
      transform: 'scale(1.1)',
    },
  }}
>
  {t("General.RelatedLink")}
</Button>;
}


function Activity() 
{
  const { id } = useParams();
  const {t} = useTranslation();

  const event = getEventFromJson(id);
  const navigate = useNavigate();
if(event ===null)
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
           <Grid container spacing={{lg:"30px", md:"30px", xs:"20px"}} marginTop={{lg: "1vh", md: '1vh', xs:"1vh"}}>
            <Grid item lg={8} md={8} xs={12}>
              <Stack direction="row" justifyContent="flex-start">
              <Typography sx={{fontWeight:"600", color:"#DD0000", fontSize:{lg:"32px", md: "32px", xs:"24px"}}}>{event.bigTitle}</Typography>
              </Stack>

              <Stack direction="column"  marginTop={{lg: "3vh", md: '3vh', xs:"2vh"}} justifyContent="flex-start">
              <Stack direction="column" spacing={{lg:"3px", md:"2px", xs:"2px"}} justifyContent="flex-start">
              {
                event.detail.map((item) => {
                  if(item.length === 0)
                    {
                      return(
                        <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"24px", md: "24px", xs:"18px"}}}>&nbsp;</Typography>
                      )
                    }
                  return(
                    <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"24px", md: "24px", xs:"18px"}}}>{item}</Typography>
                  )
                }
              )}
              </Stack>
              
              <Stack direction="column" marginTop={{lg: "3vh", md: '3vh', xs:"2vh"}} marginBottom={{lg: "1vh", md: '3vh', xs:"2vh"}}spacing={{lg:"20px", md:"20px", xs:"10px"}} width={{lg:"80%", md:"95%", xs:"100%"}} >
              {
              event.image.map((item) => {

                return(
                <Stack direction="row"  width="100%" justifyContent={{lg:"flex-start", md:"flex-start", xs:"center"}}>
                  <Box component="img" sx={{height: "auto", display: 'block', width: "100%", overflow: 'hidden'}} src={item} alt={item}/>
                  </Stack>
                )
              }
            )
              
            }
            </Stack>
          </Stack>
            </Grid>
            <Grid item lg={4} md={4} xs={12} marginBottom={{lg: "1vh", md: '0vh', xs:"2vh"}}>


              <Stack direction="column"  justifyContent="flex-start">
              <Stack direction="column" spacing={{lg:"20px", md:"20px", xs:"10px"}} justifyContent="flex-start">
              {getWeekday(event.weekday)}
              {getVenue(event.venue)}
              {getTime(event.time)}
              {getTicket(event.ticket)}
              {getTicketing(event.ticketing, event.isticketable)}
              {getLink(event.link)}
              </Stack>

              
              
              </Stack>
            </Grid>
            <Grid item container lg={12} md={12} xs={12} spacing={{lg:"10px", md:"20px", xs:"10px"}} marginBottom={{lg: "1vh", md: '0vh', xs:"2vh"}}>
            {
                event.instagram.map((item) => {
                  return(
                    <Grid item lg={4} md={6} xs={12}>
                      <InstagramEmbed url={item} width="100%" />
                      </Grid>
                  )
                }
              )}

            </Grid>
           </Grid>
        </Stack>
      </Fade>
    </Stack>
  )
}export default Transition(Activity);


