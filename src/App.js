import React, { useEffect } from 'react';
import {CssBaseline} from '@mui/material';
import {Route, Routes} from 'react-router';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Navbar from './components/NavBar/NavBar';

import { AnimatePresence } from 'framer-motion';

import Home from './pages/home/Home'
import AboutUs  from './pages/aboutus/aboutus';
import News  from './pages/news/News';
import PrevAct from './pages/Prevact/Prevact';
import Gallery  from './pages/gallery/gallery';
import Collections  from './pages/collections/collections';
import ContactUs from './pages/Contactus/Contactus';


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
      red: "#FF0000",
      darkred:"#BB0000",
      black: "#0F0F0F",
      grey: "#999292"

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
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/prevact" element={<PrevAct/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/collections" element={<Collections/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
        </AnimatePresence>
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
