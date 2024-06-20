import React, { useEffect } from 'react';
import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Navbar from './components/NavBar/NavBar';
import Home  from './pages/home/home';
//import Aboutus from './components/Aboutus';
//import Prevact from './components/Prevact';
//import Gallery from './components/Gallery';
import Collection from './pages/Collections/Collections';
import News from './pages/news/News';
import Footer from "./components/Footer/Footer";
import './App.css';




const theme = createTheme({
  typography: {
    fontFamily: ['Zen Old Mincho','serif'].join(','),
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
      main: "#0F0F0F",
      red: "#FF0000"
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
      <News />
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
