import HomeNav from "./pages/home"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { Routes, Route } from "react-router-dom"
import { auth } from "./api/firebase.js"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import NavBar from "./pages/Navbar"
import Login from "./pages/login"

export default function App() {
  const { userType } = useContext(AuthContext)

  console.log("userType", userType)
  return (
    <div>
      {userType === "guest" ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomeNav />} />
          <Route path="/login" element={<NavBar />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomeNav />} />
        </Routes>
      )}
    </div>
  )
}
