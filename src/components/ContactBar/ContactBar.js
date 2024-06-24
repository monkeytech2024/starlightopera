import * as React from 'react';
import {Stack} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';


import EmailIcon from "@mui/icons-material/Email";

import ContactItem from './ContactItem';

export default function ContactBar() {

  return (
    <Stack direction="row" spacing={{ xs: "0.5vh" }}>
      <ContactItem dest="https://www.instagram.com/starlight_opera/" icon={<InstagramIcon className="inner" sx={{ height:"2vh", width: "2vh",color: 'primary.red' }} />}/>
      <ContactItem dest="https://wa.me/16478871393/" icon={<WhatsappIcon className="inner" sx={{ height:"2vh", width: "2vh",color: 'primary.red' }} />}/>
      <ContactItem dest="https://www.facebook.com/starlightopera/" icon={<FacebookIcon className="inner" sx={{height:"2vh", width: "2vh", color: 'primary.red' }} />} />
      <ContactItem dest="https://www.youtube.com/@starlightopera/" icon={<YouTubeIcon className="inner" sx={{ height:"2vh", width: "2vh",color: 'primary.red' }} />} />
      <ContactItem dest="tel:+1647-887-1393" icon={<PhoneIcon className="inner" sx={{ height:"2vh", width: "2vh", color: 'primary.red' }} />}/>
      <ContactItem dest="mailto: info@starlightopera.com" icon={<EmailIcon className="inner" sx={{ height:"2vh", width: "2vh",color: 'primary.red' }} />}/>
      <ContactItem dest="https://maps.app.goo.gl/eX6v9LeqrMqXmiSS6" icon={<LocationOnIcon className="inner" sx={{ height:"2vh", width: "2vh",color: 'primary.red' }} />} />
    </Stack>
  );
}