import React, { useEffect } from 'react';
import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Navbar from './components/NavBar';
import Home from './pages/home/Home';
//import Aboutus from './components/Aboutus';
//import Prevact from './components/Prevact';
//import Gallery from './components/Gallery';
import Collection from './pages/collections/collections';
//import Contactus from './components/Contactus';
import Footer from "./components/Footer";




const theme = createTheme({
  typography: {
    fontFamily: ['sans-serif','Inconsolata'].join(','),
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
      color: "#FFFFFF"
    },
    h7: {
      fontWeight: 700,
    },
    h8: {
      fontWeight: 700,
    }
  },
  palette: {
    background:
    {
      main: "#F2E7E7",
      navbar: "#F5F5F5"
    },
    primary: {
      black: "#0F0F0F",
    },
    mode: "light",
    action: {
      active: "#efc8b1",
    }
  }
});

function App() {
useEffect(()=>
{
  document.title="Starlight Chinese Opera "
},[]);
  return (
    
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
