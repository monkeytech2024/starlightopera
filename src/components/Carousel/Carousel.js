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
import MobileBanner3 from '../../assets/images/Banner/mobile/banner3.png';
import { boxClasses, Stack } from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagev = [
  {
    label: '/event/7',
    imgPath: WebBanner1,
  },
];

const imageh = [
  {
    label: '/event/7',
    imgPath: MobileBanner1,
  },
  {
    label: '/event/7',
    imgPath: MobileBanner3,
  },
];

function SwipeableTextMobileStepper() {
  console.log(window.innerHeight);
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

      <Stack direction="column" width= {{lg:(94*16/9)+"vh", md:"100%"}}  justifyContent={"center"}   > 
      <Stack direction="column" display={{lg:"flex", md:"none", xs:"none"}} width="100%" >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents={false}
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
      <Stack direction="row" justifyContent="center">
      <MobileStepper steps={maxSteps}
       
        activeStep={activeStep}
        sx={{
          justifyContent:"center",
          position:"relative",
          top:"-5vh",
          zIndex:"5",
          width:"95%",
          bgcolor: 'transparent',
          "& .MuiMobileStepper-dot": {
            backgroundColor: "primary.white",
            height: "1vh",
            margin: "1vh",
            width: "1vh",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "primary.red"
          }
        }}
      />
      </Stack>
      </Stack>


      <Stack direction="column" display={{lg:"none", md:"flex", xs:"flex"}} width="100%" height="auto">
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
      <Stack direction="row" justifyContent="center">
      <MobileStepper steps={2}
       
        activeStep={activeStep}
        sx={{
          justifyContent:"center",
          position:"relative",
          top:"-5vh",
          zIndex:"5",
          width:"96%",
          bgcolor: 'transparent',
          "& .MuiMobileStepper-dot": {
            backgroundColor: "primary.white",
            height: "1vh",
            margin: "1vh",
            width: "1vh",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "primary.red"
          }
        }}
      />
      </Stack>
      </Stack>

<Stack direction="row" width="100%" justifyContent="space-between">
      
      <Box  display={{lg:"flex", md:"none", xs:"none"}} direction="row" height="5vw"  position="relative" top="-55vh" >
        <Button  zIndex={5} sx={{bgcolor:"#0f0f0f", opacity:"20%"}} onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (<KeyboardArrowRight color='primary.white' />) : (<KeyboardArrowLeft sx={{color:"#ffffff"}}/>)}
        </Button>
        </Box>
        <Box display={{lg:"flex", md:"none" , xs:"none"}} direction="row-reverse" height="5vw" position="relative" top="-55vh" >
        <Button zIndex={5} sx={{bgcolor:"#0f0f0f", opacity:"20%"}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          {theme.direction === 'rtl' ? (<KeyboardArrowLeft color='primary.white' />) : (<KeyboardArrowRight sx={{color:"#ffffff"}} />)}
        </Button>
      </Box>

    </Stack>

      </Stack>

  
     
    </Stack>
         


  );
}

export default SwipeableTextMobileStepper;
