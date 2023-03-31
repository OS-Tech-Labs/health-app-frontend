/**
 * Return the ra
 */
import { Dashboard } from "@mui/icons-material";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "./Themes";
import DashBoard from "./scenes/dashboard/Dashboard";
import Layout from "./scenes/layout";
import DashboardHome from "./scenes/dashboard/Dashboard";
import {Login} from "./scenes/Login";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  return (
   
      <div className="App">
        <BrowserRouter>
        <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route element ={<Layout/>}>
          <Route path= "/abc" element ={<Navigate to ="/dashboard" replace/>}/>
          <Route path ="/dashboard" element ={<DashboardHome/>}/>
            
            
            

          </Route>
        </Routes>
      </ThemeProvider>
        </BrowserRouter>
      
        
        
      </div>
      
  );
      
  
}

export default App;
