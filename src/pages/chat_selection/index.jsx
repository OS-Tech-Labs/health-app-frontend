import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

function ChatSelection() {
  const navigate = useNavigate()

  const handleDoctorChat = () => {
    // alert("Chat with Doctor")
    navigate("/chat")
    // Add your doctor chat logic here
  }

  const handleBotChat = () => {
    alert("Chat with Bot")
    navigate("/chat")
    // Add your bot chat logic here
  }
  return (
    <div >
      <h1>Welcome to Chat App</h1>
      <button onClick={handleDoctorChat}>Chat with Doctor</button>
      <button onClick={handleBotChat}>Chat with Bot</button>
    </div>
  )
}

export default ChatSelection
