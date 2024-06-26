import React from 'react';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";
const MedHeader = ({children, weight}) => 
{
  return (
    <Stack direction="row" marginTop={"6vh"}alignItems="center" justifyContent="center">
      <Stack width={{md:(30 - weight)/2 + "vw", xs:(80 - weight*3)/2 +"vw"}}>
        <Divider sx={{backgroundColor: "primary.darkred", width:"100%", height: "1.5px"}}/>
      </Stack>
      <Stack width={{md:weight+1+ "vw", xs: weight*3 +2+ "vw"}} direction="row" justifyContent="center">
        <Typography  fontWeight={{md:"400", xs:"500"}} color="primary.darkred" fontSize={{md:"1.3vw", xs:"4vw"}}>{children}</Typography>
      </Stack>
      <Stack width={{md:(30 - weight)/2 + "vw", xs:(80- weight*3)/2 + "vw"}}>
        <Divider sx={{backgroundColor: "primary.darkred", width:"100%",height:"1.5px"}}/>
      </Stack>
    </Stack>
    )
};
export default MedHeader;