import React, { useState } from "react"
import "./chat.css"
import { Container, Grid, Paper } from "@mui/material"
import ChatHeader from "./Header"

import Footer from "./Footer"
import Messages from "./Messages"

function Chat() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return
    const currentSender = "guest" // Replace with the actual sender

    // Add the new message to the messages array
    setMessages([...messages, { text: newMessage, sender: currentSender }])

    // Update the previous sender

    // Clear the input field
    setNewMessage("")
  }

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <ChatHeader />
          <Paper
            elevation={3}
            className="paper-container"
            // style={{
            //   height: "400px",
            //   overflowY: "auto",
            //   padding: "20px",
            //   position: "relative",
            // }}
          >
            <Messages messages={messages} />
          </Paper>

          <Footer
            newMessage={newMessage}
            handleSendMessage={handleSendMessage}
            setNewMessage={setNewMessage}
          />
        </Grid>
        {/* You can add additional components for user list, etc. in the second Grid item */}
      </Grid>
    </Container>
  )
}

export default Chat
