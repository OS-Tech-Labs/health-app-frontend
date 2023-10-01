import React from "react"
import "./chat.css"
import { Container, Grid, Paper } from "@mui/material"
import { useAuthState } from "react-firebase-hooks/auth"
import ChatHeader from "./Header"
import Footer from "./Footer"
import Messages from "./Messages"
import { auth, db } from "../../api/firebase.js"
import { useHumanLogic } from "../chat_selection/HumanLogic"
import { useBotLogic } from "../chat_selection/BotLogic"

function Chat() {
  const { messages, newMessage, handleSendMessage, setNewMessage } =
    useHumanLogic() // Use the extracted logic

  

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
