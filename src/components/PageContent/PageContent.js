import React  from 'react';
import {Stack, Typography} from "@mui/material";

const PageContent = ({ children }) => 
{
  return (
    <Stack direction="row" marginTop={"20vh"} alignItems="center" width="100%" justifyContent="center">
      <Typography fontWeight="500" color="primary.grey" fontSize={{md:"2vw", xs:"8vw"}}>{children}</Typography>
    </Stack>
  );
}; 
export default PageContent;