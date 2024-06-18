import React, { useState } from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars, FaTimes} from 'react-icons/fa'
import {Badge, Button, Grid, Link} from "@mui/material";
import './NavBar.css';
import ICON from "../images/ICON.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import InstagramIcon from "@mui/icons-material/Instagram";

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Navbar() {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)
    const [navbar, setNavbar] = useState(false);

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClick =  (event, dest) => {
        setNav(!nav)
        const anchor = document.querySelector(dest);
    
        if (anchor) {
          anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
    
      const handleHeaderClick =  (event, dest) => {
        const anchor = document.querySelector(dest);
    
        if (anchor) {
          anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

        const changeBackground=() =>
        {
            if(window.scrollY>= 700){
                setNavbar(true)
            }
            else
            {
            setNavbar(false);
            }
        }
        window.addEventListener('scroll', changeBackground);
    return (
        <div className='navbar'>
            <div className={navbar? "container active2":"container"}>
            
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <Button underline="none" component="button"  onClick={(evt) => handleHeaderClick(evt, "#home")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: {md: 26, xs:12}  }}>
<img class="ICON" alt="Francis' icon" src={ICON}></img>
      Starlight Chinese Opera Performing Art Centre</Button>
                </div>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                
                <li><Button underline="none" component="button"  onClick={(evt) => handleClick(evt, "#home")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Home</strong></Button></li>
                <li><Button underline="none" component="button"  onClick={(evt) => handleClick(evt, "#aboutme")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Abount Us</strong></Button></li>
                <li><Button underline="none" component="button" onClick={(evt) => handleClick(evt, "#experience")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>News</strong></Button></li>
                <li><Button underline="none"component="button" onClick={(evt) => handleClick(evt, "#education")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Event</strong></Button></li>

    <li><Button underline="none" component="button" onClick={(evt) => handleClick(evt, "#experience")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Previous Performances and Activities</strong></Button></li>

<li><Button underline="none" component="button" onClick={(evt) => handleClick(evt, "#experience")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Gallery</strong></Button></li>
    <li><Button underline="none" component="button" onClick={(evt) => handleClick(evt, "#experience")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Collections</strong></Button></li>
    <li><Button underline="none" component="button" onClick={(evt) => handleClick(evt, "#experience")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>Contact and Support</strong></Button></li>
                       
              
                    <div className='mobile-menu'>

                        <div className="social-icons">
                        <Link href="mailto:francis.huikh@gmail.com" target="_blank" sx={{outline: 'none'}}>
                            <InstagramIcon   sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25}} />
    </Link>
    <Link href="https://www.linkedin.com/in/francishui0122/" target="_blank" sx={{outline: 'none'}}>
                            <WhatsappIcon sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25  }} />
    </Link><Link href="https://www.instagram.com/francis_hui_/" target="_blank" sx={{outline: 'none'}}>

    
                            <FacebookIcon sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25  }} /></Link><Link href="https://www.facebook.com/francis.huikh/" target="_blank" sx={{outline: 'none'}}>
                            <YouTubeIcon  sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25  }}/></Link> 
    <Link href="https://wa.me/14379796709/" target="_blank" sx={{outline: 'none'}}>
                            <PhoneIcon  sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25  }}/></Link>

<Link href="https://wa.me/14379796709/" target="_blank" sx={{outline: 'none'}}>
                            <MailIcon  sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25  }}/></Link>

<Link href="https://wa.me/14379796709/" target="_blank" sx={{outline: 'none'}}>
                            <LocationOnIcon  sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 25  }}/></Link>

                            
                            
                        </div>
                        <li><Button underline="none" component="button" onClick={(evt) => handleClick(evt, "#experience")} className="NavButton" sx={{color: '#f5f5f5',  transition: "0.4s",
    ':hover': {
      color: '#6aa4e6',
      transform: 'scale(1.25)',
    }, fontSize: 18  }}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中文</strong></Button></li>
                    </div>

                </ul>

                <ul className='nav-menu hide'>


                    <li><h6>中文</h6></li></ul>
                <Grid display={{md: "none"}} className="hamburger" onClick={handleNav} >
                  {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<Badge badgeContent={1} color="primary"><ShoppingCartIcon style={{ color: '#ffffff' }} size={20} /></Badge>)}
                  &nbsp;&nbsp; &nbsp;
                    {nav ? <></> : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
                    
                    
  
                </Grid>

            </div>
        </div>
    )
}

export default Navbar
