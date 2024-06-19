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
        color: "black",

        background: 
        {
          xs: "black",
          md: "black",
          lg: "black"
        },
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
      }}
    >


 
    </Grid>
    )
}

export default Home
