import React, {useState} from "react"
import { Button } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

const ChatButton = ({onClick}) => {


  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SendIcon />}
      onClick={onClick}
    >
      Send
    </Button>
  )
}

export default ChatButton
