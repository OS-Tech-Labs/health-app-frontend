import HomeNav from "./pages/home"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { Routes, Route } from "react-router-dom"
import NavBar from "./pages/Navbar"
import Login from "./pages/login"
import ChatSelection from "./pages/chat_selection"
import Chat from "./pages/chat/ChatNew"

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
          <Route path="/chat_selection" element={<ChatSelection />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomeNav />} />
        </Routes>
      )}
    </div>
  )
}
