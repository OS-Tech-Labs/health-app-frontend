import React from "react"
import { Box,Avatar } from "@mui/material"
import "./chat.css"

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => {
        // Check if the current sender is different from the previous one
        const isFirstInGroup =
          index === 0 || message.sender !== messages[index - 1].sender
        const messageContainerClass =
          message.sender === "user"
            ? "sent-message-container"
            : "received-message-container"    
        return (
          <div
            key={index}
            className={`message-container ${messageContainerClass}`}
          >
            
            {message.sender !== "user" && (
              <Avatar src={message.avatar} alt={message.name} />
            )}
            <Box
              className={`message ${
                message.sender === "user" && isFirstInGroup
                  ? "sent-message-first"
                  : isFirstInGroup
                  ? "received-message-first"
                  : message.sender === "user"
                  ? "sent-message"
                  : "received-message"
              }`}
            >
              {message.text}
            </Box>
          </div>
        )
      })}
    </div>
  )
}

export default Messages
