import HomeNav from "./pages/home"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { Routes, Route } from "react-router-dom"

export default function App() {
  const { userType } = useContext(AuthContext)

  console.log("userType", userType)
  return (
    <div>
      {userType === "guest" ? (
        <Routes>
          <Route path="/" element={<HomeNav />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomeNav />} />
        </Routes>
      )}
    </div>
  )
}
