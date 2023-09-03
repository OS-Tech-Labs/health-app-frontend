import React from "react"
import SendIcon from "@mui/icons-material/Send"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import MicIcon from "@mui/icons-material/Mic"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import { IconButton, TextField } from "@mui/material"

const Footer = ({ newMessage, handleSendMessage, setNewMessage }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "8px",
        borderRadius: "10px",
      }}
    >
      <IconButton>
        <EmojiEmotionsIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <TextField
        fullWidth
        placeholder="Message"
        variant="outlined"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        sx={{
          "& fieldset": { border: "none" },
        }}
      />
      {newMessage === "" ? (
        <IconButton>
          <MicIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      )}
    </div>
  )
}

export default Footer
