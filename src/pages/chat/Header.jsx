import React from "react"
import { AppBar, Avatar } from "@mui/material"
import styled from "styled-components"
import "./chat.css"


const ChatHeader = () => {
  return (
    <AppBar className="app-bar" position="static">
      <Avatar />
    </AppBar>
  )
}

export default ChatHeader
