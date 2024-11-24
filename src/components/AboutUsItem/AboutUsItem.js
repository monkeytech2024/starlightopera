import React from 'react';
import {Button, Box, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";


const AboutUsItem = (props) => 
{
    const { t } = useTranslation();
    const name = props.name;
    const thumbnail = props.thumbnail;
    const id = props.id;
    let navigate = useNavigate();
const handleClick = (path) =>
    {
       navigate(path);
        window.scrollTo(0, 0);
    }

    return (
        <Grid item lg={3} md={4} xs={6} justifyContent="center"  spacing="10px" marginBottom={{lg:"2.5vh",md:"2.5vh", xs:"2.5vh"}}> 
                <Box onClick={()=>handleClick("/bios/"+id)}  component="img" sx={{height: "auto", display: 'block', width: "95%", overflow: 'hidden'}} src={thumbnail} alt={name}/>

                    <Typography textAlign="center" fontWeight="500" color="primary.black" marginTop={{lg:"1vh", md:"2vh", xs:"1vh"}} fontSize={{lg:"25px", md:"30px", xs:"18px"}}>{t(name)}</Typography>
            </Grid>



    )
};
export default AboutUsItem;