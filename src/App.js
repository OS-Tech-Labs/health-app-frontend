import HomeNav from "./pages/home"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { Routes, Route } from "react-router-dom"
<<<<<<< Updated upstream
=======
import NavBar from "./pages/navbar"
import Login from "./pages/login"
import ChatSelection from "./pages/chat_selection"
import Chat from "./pages/chat/ChatNew"
import Home from "./pages/home"
>>>>>>> Stashed changes

export default function App() {
  const { userType } = useContext(AuthContext)

  console.log("userType", userType)
  return (
    <div>
      {userType === "guest" ? (
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<HomeNav />} />
=======
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeNav />} />
          <Route path="/login" element={<NavBar />} />
          <Route path="/chat_selection" element={<ChatSelection />} />
          <Route path="/chat" element={<Chat />} />
>>>>>>> Stashed changes
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  )
}
