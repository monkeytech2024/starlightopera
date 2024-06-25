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

import img1v from '../../assets/images/Banner/banner1v.png';
import img1h from '../../assets/images/Banner/banner1h.png';
import img2v from '../../assets/images/Banner/banner2v.png';
import img2h from '../../assets/images/Banner/banner2h.png';
import { boxClasses, Stack } from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagev = [
  {
    label: '/home',
    imgPath:
    img1v,
  },
  {
    label: '/contactus',
    imgPath:
    img2v,
  },
  {
    label: '/collections',
    imgPath:
    img1v,
  },

];

const imageh = [
  {
    label: '/home',
    imgPath:
    img1h,
  },
  {
    label: '/contactus',
    imgPath:
    img2h,
  },
  {
    label: '/collections',
    imgPath:
    img1h,
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
    <Box sx={{ maxWidth: "100vw", flexGrow: 1 }}>
      <Stack  direction = 'row' display= {{md:'flex', xs: 'none'}}  > 
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >       
        {imagev.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                justifyContent = 'center'
                sx={{
                  height: "auto",
                  display: 'block',
                  maxWidth: '2000px',
                  overflow: 'hidden',
                  width: '100vw',
                 
                }}
                src={step.imgPath}
                alt={step.label}
                onClick={() => gotToNewPage(step.label)}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      </Stack>

      <Stack  display= {{md:'none', xs: 'flex'}}> 
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
                  height: "80vh",
                  display: 'block',
                  maxWidth: "100vw",
                  overflow: 'hidden',
                  width: '100vw',
                }}
                src={step.imgPath}
                alt={step.label}
                onClick={() => gotToNewPage(step.label)}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      </Stack>
      

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
         

            
    
    
  );
}

export default SwipeableTextMobileStepper;
