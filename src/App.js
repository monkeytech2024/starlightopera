import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Navbar from './components/NavBar/NavBar';

import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home/Home'
import AboutUs  from './pages/AboutUs/AboutUs';
import News  from './pages/News/News';
import PrevAct from './pages/PrevAct/PrevAct';
import Gallery  from './pages/Gallery/Gallery';
import Collections  from './pages/Collections/Collections';
import ContactUs from './pages/ContactUs/ContactUs';
import SupportUs from './pages/SupportUs/SupportUs';
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Activity from "./pages/Activity/Activity"
import Theatre from './pages/Theatre/Theatre';
import Training from './pages/Training/Training';
import CommunityService from './pages/CommunityService/CommunityService';
import { Navigate } from "react-router-dom";
import './App.css';

const theme = createTheme({
  palette: {
    background:
    {
      main: "#F2E7E7",
      navbar: "#F5F5F5",
      
    },
    primary: {
      main: "#0F0F0F",
      red: "#FF0000",
      darkred:"#BB0000",
      black: "#0F0F0F",
      grey: "#999292",
      white: "#ffffff",

    },
    mode: "light",
    action: {
      active: "#efc8b1",
    }
  },
  typography: {
    fontFamily: ["Noto Serif HK", 'serif'].join(','),
    body1: {
      fontWeight: 500,
      color: "#0F0F0F",
    },
    body2: {
      fontWeight: 400,
      color: "#0F0F0F",
    },
    h1: {
      fontWeight: 600,
      color: "#0F0F0F",
    },
    h2: {
      fontWeight: 400,
      color: "#BB0000",
    },
  }
  
});

function App()
{
  useEffect(()=>{document.title="Starlight Chinese Opera"},[]);
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        <Route exact path="/news" element={<News/>}></Route>
        <Route exact path="/prevact" element={<PrevAct/>}></Route>
        <Route exact path="/gallery" element={<Gallery/>}></Route>
        <Route exact path="/collections" element={<Collections/>}></Route>
        <Route exact path="/contactus" element={<ContactUs/>}></Route>
        <Route exact path="/supportus" element={<SupportUs/>}></Route>
        <Route exact path="/theatre" element={<Theatre/>}></Route>
        <Route exact path="/training" element={<Training/>}></Route>
        <Route exact path="/communityService" element={<CommunityService/>}></Route>
        <Route exact path="/error" element={<Error/>}></Route>
        <Route exact path="/event/:id" element={<Activity/>}></Route>
        <Route path="*" element={<Navigate to="/error" />} />

        </Routes>
        </AnimatePresence>
      <Footer/>
      </ThemeProvider>
    </>
  );
}export default App;
