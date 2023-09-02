import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
 
  
  return (
    <AuthContextProvider>
      <AppNav />
    </AuthContextProvider>
  )
      
  
}


