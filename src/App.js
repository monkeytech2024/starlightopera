import React, { useEffect } from 'react';
import {CssBaseline} from '@mui/material';
import {Route, Routes} from 'react-router';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Navbar from './components/NavBar/NavBar';
import Home  from './pages/home/home';
import Aboutus  from './pages/Aboutus/Aboutus';
import News  from './pages/News/News';
import Prevact  from './pages/Prevact/Prevact';
import Gallery  from './pages/Gallery/Gallery';
import Collections  from './pages/Collections/Collections';
import Contactus from './pages/Contactus/Contactus';

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
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/prevact" element={<Prevact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/collections" element={<Collections/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        </Routes>
      <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
