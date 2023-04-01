/**
 * Return the ra
 */
import { Dashboard } from "@mui/icons-material";
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

// const Loadable = (component) => (props)=>{
  // return (
    // <Suspense fallback = {<LoadingScreen/>}>

    // </Suspense>
  // )
// }
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
          </Route>
        </Routes>
      </ThemeProvider>
        </BrowserRouter>
      
        
        
      </div>
      
  );
      
  
}


