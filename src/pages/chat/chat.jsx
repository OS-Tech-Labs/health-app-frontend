import React, { useState } from "react"
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

function Chat() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add the new message to the messages array
    setMessages([...messages, { text: newMessage, sender: "user" }])

    // Clear the input field
    setNewMessage("")
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Chat App
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ minHeight: "400px", padding: "20px" }}>
            {/* Display the chat messages */}
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </Paper>
          <TextField
            fullWidth
            label="Type your message"
            variant="outlined"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage()
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Grid>
        {/* You can add additional components for user list, etc. in the second Grid item */}
      </Grid>
    </Container>
  )
}

export default Chat
