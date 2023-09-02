

import {Suspense} from "react";

import { Navigate, Routes, Route } from "react-router-dom";

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
 
  
  return (
   
      <div className="App">
       
        
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path ="/register" element = {<Register/>}/> 
          <Route  element ={<Layout/>}>
          <Route path= "/abc" element ={<Navigate to ="/dashboard" replace/>}/>
          <Route path ="/dashboard" element ={<Home/>}/>
          <Route path ="/chat" element ={<Chat/>}/>

          </Route>
        </Routes>
      
      
        
        
      </div>
      
  );
      
  
}


