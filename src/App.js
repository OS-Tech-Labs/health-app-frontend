/**
 * Return the ra
 */


import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo , Suspense, lazy} from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "./Themes";
import LoadingScreen from "./components/LoadingScreen";
import Layout from "./scenes/layout";
import Home from "./scenes/dashboard/Home";
import {Login} from "./scenes/Login";
import { Register } from "./scenes/Register";
import Chat from "./scenes/chat/chat";

const Loadable = (Components) => (props)=>{
   return (
     <Suspense fallback = {<LoadingScreen/>}>
        <Components{...props}/>
     </Suspense>
   )
}
export default function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  return (
   
      <div className="App">
        <BrowserRouter>
        <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path ="/register" element = {<Register/>}/> 
          <Route  element ={<Layout/>}>
          <Route path= "/abc" element ={<Navigate to ="/dashboard" replace/>}/>
          <Route path ="/dashboard" element ={<Home/>}/>
          <Route path ="/chat" element ={<Chat/>}/>

          </Route>
        </Routes>
      </ThemeProvider>
        </BrowserRouter>
      
        
        
      </div>
      
  );
      
  
}


