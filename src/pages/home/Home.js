import React from 'react'

import {Stack} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";
import Transition from '../../components/Transition/Transition';

import Carousel from "../../components/Carousel/Carousel";

function Home() 
{
  const {t} = useTranslation();
  return (
    <Stack direction="column" sx={{backgroundColor:"background.main"}}>

        <Carousel/>
      <Stack direction="column" minHeight="100vh" width="100vw"/>
      </Stack>

  )
}
export default Transition(Home);
