import React from 'react';
import {Button, Box, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";


const NewsItem = (props) => 
{
    const { t } = useTranslation();
    const title = props.title;
    const date = props.date;
    const thumbnail = props.thumbnail;
    const id = props.id;
    let navigate = useNavigate();

const handleClick = (path) =>
    {
       navigate(path);
        window.scrollTo(0, 0);
      
      
    }


    return (
        <Grid item container justifyContent="center"  spacing="10px"> 
            <Grid item lg={4} md={5} xs={12}>
                <Stack direction="row" justifyContent="center" width={{lg:"95%", md:"95%", xs:"100vw"}}>
                <Box onClick={()=>handleClick("/event/"+id)}  component="img" sx={{height: "auto", display: 'block', width: "95%", overflow: 'hidden'}} src={thumbnail} alt={title}/>
                </Stack>
            </Grid>
            <Grid item lg={8} md={7} xs={12}>
            <Stack direction="column" marginLeft={{lg:"0px", md:"0px", xs:"20px"}} spacing={{lg:"32px", md:"32px", xs:"10px"}}>
                <Stack direction="column" spacing={{lg:"5px", md:"5px", xs:"3px"}}>
                    <Typography fontWeight="500" color="primary.darkred" fontSize={{lg:"30px", md:"30px", xs:"18px"}}>{t(title)}</Typography>
                    <Typography fontWeight="500" color="primary.grey" fontSize={{lg:"20px", md:"20px", xs:"16px"}}>{t(date)}</Typography>
                    </Stack>
                    <Button

      variant="contained"
      onClick={()=>handleClick("/event/"+id)}
      sx={{
        width:{lg:"140px", md:"160px", xs:"130px"},
        height:{lg:"45px", md:"45px", xs:"40px"},
        bgcolor:"#ffffff",
        borderRadius:"10px",
        color:'#ee0000',
        textTransform: 'none',
        fontSize:{lg:"18px", md:"18px", xs:"16px"},
        fontWeight:"600",
        "&:hover": {
          bgcolor:"#ee0000",
          borderRadius:"10px",
          color:'#ffffff',
          transform: 'scale(1.1)',
        },
      }}
    >
      {t("General.LearnMore")}
    </Button>

                </Stack>
            </Grid>

    </Grid>


    )
};
export default NewsItem;