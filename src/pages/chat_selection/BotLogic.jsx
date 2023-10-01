
import React, { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../api/firebase.js"
import axios from "axios";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore"

export function useBotLogic() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a helpful assistant that knows Omalya is my wife.",
    },
    { role: "user", content: "Who is my wife?" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [user] = useAuthState(auth)



  const handleSendMessage = async () => {
    try {
      const response = await axios.post("/api/chat", { messages })
      setNewMessage("")
    } catch (error) {
      console.error(error)
    }
  }

  return { messages, newMessage, handleSendMessage, setNewMessage }
}
