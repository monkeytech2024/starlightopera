import React  from 'react';
import {Stack, Typography} from "@mui/material";

const PageContent = ({ children }) => 
{
  return (
    <Stack direction="row" marginTop={"20vh"} alignItems="center" width="100%" justifyContent="center">
      <Typography fontWeight="500" color="primary.grey" fontSize={{lg:"2vw", md:"4vw", xs:"6vw"}}>{children}</Typography>
    </Stack>
  );
}; 
export default PageContent;