import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useNavigate } from "react-router-dom";

import WebBanner1 from '../../assets/images/Banner/web/banner1.png';
import MobileBanner1 from '../../assets/images/Banner/mobile/banner1.png';
import { boxClasses, Stack } from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagev = [
  {
    label: '/aboutus',
    imgPath: WebBanner1,
  },
  {
    label: '/contactus',
    imgPath: WebBanner1,
  },
  {
    label: '/collections',
    imgPath: WebBanner1,
  },
];

const imageh = [
  {
    label: '/aboutus',
    imgPath: MobileBanner1,
  },
  {
    label: '/contactus',
    imgPath: MobileBanner1,
  },
  {
    label: '/collections',
    imgPath: MobileBanner1,
  },

];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imagev.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const navigate = useNavigate()

  const gotToNewPage=(path)=>{
    navigate(path);
  }

  return (
    <Stack direction="row" justifyContent="center"  sx={{width: "100%", flexGrow: 1 }}>

      <Stack direction="column" width= {{md:(94*16/9)+"vh", xs:"100%"}}  justifyContent={"center"}   > 
      <Stack direction="column" display={{md:"flex", xs:"none"}} width="100%" height="auto">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        sx={{justifyContent: "center"}}> 
  
         {imagev.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box component="img"justifyContent = 'center' sx={{height: "auto", display: 'block', width: "100%", overflow: 'hidden',}}
                src={step.imgPath}
                alt={step.label}
                onClick={() => gotToNewPage(step.label)}
            />
            ) : null}
          </div>
        ))}            
      </AutoPlaySwipeableViews>
      <MobileStepper steps={maxSteps}
       
        activeStep={activeStep}
        sx={{
          justifyContent:"center",
          position:"absolute",
          top:"95vh",
          zIndex:"5",
          width:"100%",
          bgcolor: 'transparent',
          "& .MuiMobileStepper-dot": {
            backgroundColor: "primary.white",
            height: "1.5vh",
            margin: "1vh",
            width: "1.5vh",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "primary.red"
          }
        }}
      />
      </Stack>


      <Stack direction="column" display={{md:"none", xs:"flex"}} width="100%" height="auto">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >       
        {imageh.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  
                  display: 'block',
                  overflow: 'hidden',
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
                onClick={() => gotToNewPage(step.label)}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper steps={maxSteps}
       
        activeStep={activeStep}
        sx={{
          justifyContent:"center",
          position:"absolute",
          top:"100vh",
          zIndex:"5",
          width:"100%",
          bgcolor: 'transparent',
          "& .MuiMobileStepper-dot": {
            backgroundColor: "primary.white",
            height: "1.5vh",
            margin: "1vh",
            width: "1.5vh",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "primary.red"
          }
        }}
      />
      </Stack>


      
      <Stack zIndex={5} display={{md:"flex", xs:"none"}} direction="row" height="10vh" width="3vw" position="relative"  top="-52.5vh" >
        <Button  sx={{bgcolor:"#0f0f0f", opacity:"20%"}} onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (<KeyboardArrowRight color='primary.white' />) : (<KeyboardArrowLeft sx={{color:"#ffffff"}}/>)}
        </Button>
        </Stack>
        <Stack display={{md:"flex", xs:"none"}} direction="row-reverse" height="10vh"position="relative"  top="-62.5vh" >
        <Button zIndex={5} sx={{bgcolor:"#0f0f0f", opacity:"20%"}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          {theme.direction === 'rtl' ? (<KeyboardArrowLeft color='primary.white' />) : (<KeyboardArrowRight sx={{color:"#ffffff"}} />)}
        </Button>
      </Stack>

    

      </Stack>

  
     
    </Stack>
         


  );
}

export default SwipeableTextMobileStepper;
