import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_en from './assets/languages/EN/global.json';
import global_cn from './assets/languages/CN/global.json';
import i18next from "i18next";

i18next.init({
  interpolation: {escapeValue : false},
  lng: "en",
  resources: {
    en:{global : global_en},
    zhCN: {global: global_cn},
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <i18nextProvider i18n={i18next}>
    <App />
    </i18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
