import React from "react"
import Chat from "../chat/Chat.jsx"
import NavBar from "../navbar"
import Welcome from "./Welcome.jsx"
import Footer from "../footer"
import Login from "../login/index.jsx"

const Home = () => {

  return (
    <div>
      <NavBar/>
      <Welcome/>
      <Footer/>
    </div>
  )
}

export default Home
