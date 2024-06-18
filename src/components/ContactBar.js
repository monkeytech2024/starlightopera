import * as React from 'react';
import {Stack} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Avatar, Link} from "@mui/material";

import './ContactBar.css'




export default function ContactBar() {
  return (
    <Stack direction="row" spacing={{ xs: 1 }}>



      <Link href="https://www.instagram.com/francis_hui_/" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <InstagramIcon className="inner" sx={{ color: "#FFFFFF" }} />
        </Avatar>
      </Link>
      <Link href="https://wa.me/14379796709/" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <WhatsappIcon className="inner" sx={{ color: "#FFFFFF" }} />
        </Avatar>
      </Link>
      <Link href="https://www.facebook.com/francis.huikh/" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <FacebookIcon className="inner" sx={{ color: "#FFFFFF" }} />
        </Avatar>
      </Link>
      <Link href="https://wa.me/14379796709/" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <YouTubeIcon className="inner" sx={{ color: "#FFFFFF" }} />
        </Avatar>
      </Link> 


      <Link href="https://www.linkedin.com/in/francishui0122/" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <PhoneIcon className="inner" sx={{ color: "#FFFFFF" }} />
        </Avatar>
      </Link>
      <Link href="mailto:francis.huikh@gmail.com" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <MailIcon className="inner" sx={{ color: "#FFFFFF"}} />
        </Avatar>
      </Link>


           <Link href="https://wa.me/14379796709/" target="_blank" sx={{outline: 'none'}}>
        <Avatar className="outer" sx={{ bgcolor: '#FF0000' }}>
          <LocationOnIcon className="inner" sx={{ color: "#FFFFFF" }} />
        </Avatar>
      </Link>
    </Stack>
  );
}