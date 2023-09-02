import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "./state";
import {Provider} from "react-redux";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { useMemo} from "react";
import { themeSettings } from "./Themes";

const store = configureStore({
  reducer :{
    global :globalReducer,
  },
})
const mode = useSelector((state) => state.global.mode);
const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store = {store}>
      <BrowserRouter>
    <ThemeProvider theme={theme} >
    <CssBaseline/>
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </Provider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

