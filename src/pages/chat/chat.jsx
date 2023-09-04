import React, { useState } from "react"
import "./chat.css"
import { Container, Grid, Paper } from "@mui/material"
import ChatHeader from "./Header"

import Footer from "./Footer"
import Messages from "./Messages"

import { app } from "../../api/config.js"

function Chat() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    setMessages([...messages, { text: newMessage, sender: "user" }])
    setNewMessage("")
  }

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <ChatHeader />
          <Paper elevation={3} className="paper-container">
            <Messages messages={messages} />
          </Paper>

          <Footer
            newMessage={newMessage}
            handleSendMessage={handleSendMessage}
            setNewMessage={setNewMessage}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
