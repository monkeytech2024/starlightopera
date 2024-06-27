import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';

import {Fade, Stack} from "@mui/material";
import { useTranslation } from 'react-i18next';
import {} from "@mui/material";
import Transition from '../../components/Transition/Transition';

import Carousel from "../../components/Carousel/Carousel";

function Home() 
{
  const {t} = useTranslation();
  return (
    <Stack direction="row" sx={{justifyContent:"center", minHeight:"65.5vh", backgroundColor:"background.main"}}>
      <Fade in={true} timeout={2000}>
        <Stack direction="column" width="100%">
          <Carousel/>
        </Stack>
      </Fade>
    </Stack>

  )
}
export default Transition(Home);
