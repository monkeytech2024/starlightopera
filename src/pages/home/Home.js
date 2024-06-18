import React from 'react'
import './Home.css'
import {Stack, Button, Container, Grid} from "@mui/material";
import ContactBar from '../../components/ContactBar'
import {} from "@mui/material";
import {makeStyles} from "@mui/styles";
import CircleIcon from '@mui/icons-material/Circle';
const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
  },
}});

const handleClick = (event, dest) => {
  const anchor = document.querySelector(dest);

  if (anchor) {
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

function Home() {
  const classes = useStyles();
    return (
    <Grid
      id={'home'}
      container
      direction="column"
      justifyContent="space-between"
      sx={{
        minHeight: "100vh",
        color: "white",


        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >
      <Grid item />
      <Grid item>
        <Container>
          <Grid container justifyContent={{ xs: "center", md: "flex-end" }}>
            <Grid item sx={{ pb: { xs: 0, md: 15 } }}>
              
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item  sx={{ pb: 4, pl: { xs: 0, md: 7 } }}> 

      <Stack direction={{ xs: 'column', md: 'row' }} marginTop={5} spacing={{ xs: 5 }}>        <Stack justifyContent="center" direction='row' spacing={{ xs: 2 }}> 
      <CircleIcon sx={{ color: "#FF0000"}}/><CircleIcon sx={{ color: "#FFFFFF"}}/><CircleIcon sx={{ color: "#FFFFFF"}}/><CircleIcon sx={{ color: "#FFFFFF"}}/><CircleIcon sx={{ color: "#FFFFFF"}}/>

        </Stack>
         <Grid container sx={{ display: { xs: 'center', md: 'flex' } }} justifyContent={{ xs: "center", md: "flex-start" }}>
          <ContactBar />
          
        </Grid>

      <Grid container   justifyContent={{ xs: "center", md: "flex-end" }}>
          </Grid>

          
       </Stack>
      </Grid>
    </Grid>
    )
}

export default Home
