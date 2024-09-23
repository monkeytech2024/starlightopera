import React from 'react';
import {Divider, Chip,Stack, Grid,Typography} from "@mui/material";
const MedHeader = ({children, weight}) => 
{
  return (
    <Stack direction="row" marginTop={{lg:"6vh", md: "4vh", xs: "4vh"}} marginBottom={{lg:"6vh", md: "4vh", xs: "4vh"}} alignItems="center" justifyContent="center">
      <Stack width={{lg:(45 - weight)/2 + "vw", md:(80 - weight*3)/2 +"vw", xs:(80 - weight*3)/2 +"vw"}}>
        <Divider sx={{backgroundColor: "primary.darkred", width:"100%", height: "1.5px"}}/>
      </Stack>
      <Stack width={{lg:weight + 1 + "vw", md: weight*3 +2 + "vw", xs: weight*3 +2+ "vw"}} direction="row" justifyContent="center">
        <Typography  fontWeight={{lg:"400", md:"500", xs:"500"}} color="primary.darkred" fontSize={{lg:"1.8vw", md:"3vw", xs:"5vw"}}>{children}</Typography>
      </Stack>
      <Stack width={{lg:(45 - weight)/2 + "vw", md:(80 - weight*3)/2 +"vw", xs:(80 - weight*3)/2 +"vw"}}>
        <Divider sx={{backgroundColor: "primary.darkred", width:"100%",height:"1.5px"}}/>
      </Stack>
    </Stack>
    )
};
export default MedHeader;