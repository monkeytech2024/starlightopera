import React from 'react';
import {Button, Box, Stack, Grid,Typography} from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const HighlightItem = (props) => 
{
    const { t } = useTranslation();
    const title = props.title;
    const detail = props.detail;
    const thumbnail = props.thumbnail;
    const link = props.link;

    const handleClick = (link) =>
        {
          navigate(link);
          window.scrollTo(0, 0);
        }

    let navigate = useNavigate();
    return (
        <Grid item container justifyContent="center"  spacing={{lg:"10px", md:"5px", xs:"10px"}}> 
            <Grid item lg={8} md={7} xs={6}>
                <Stack direction="row" justifyContent="center" width={{lg:"95%", md:"95%", xs:"100%"}}>
                <Box   component="img" sx={{height: "auto", display: 'block', width: "100%", overflow: 'hidden'}} src={thumbnail} alt={title}/>
                </Stack>
            </Grid>
            <Grid item lg={4} md={5} xs={6}>
            <Stack direction="column" width={{lg:"95%", md:"95%", xs:"100%"}}  spacing={{lg:"32px", md:"32px", xs:"10px"}}>
                <Stack direction="column" spacing={{lg:"5px", md:"5px", xs:"6px"}}>
                    <Typography fontWeight="500" color="primary.darkred" fontSize={{lg:"32px", md:"32px", xs:"20px"}}>{t(title)}</Typography>
                    
                    {
                detail.map((item) => {
                  return(
                    <Typography sx={{fontWeight:"400", color:"#000000", fontSize:{lg:"24px", md: "24px", xs:"18px"}}}>{t(item)}</Typography>
                  )
                }
                
              )}
                    </Stack>
                    <Button 
  variant="contained"
  onClick={() => handleClick(link)}
  sx={{
    width:{lg:"150px", md:"150px", xs:"150px"},
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
  {t("General.LearnMore")}
</Button>
                </Stack>
            </Grid>

    </Grid>


    )
};
export default HighlightItem;