import React, { useState, useEffect } from "react";
import "./chat.css";
import { Container, Grid, Paper } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatHeader from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";
import { auth, db } from "../../api/firebase.js";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../../api/config.js";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    // Check if user is authenticated before accessing currentUser
    if (!user) {
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;

      const unsubscribe = onSnapshot(
        collection(db, "messages"),
        (querySnapshot) => {
          const messageList = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            const createdAt = data.createdAt && data.createdAt.toDate()
            messageList.push({
              id: doc.id,
              text: data.text,
              name: data.name,
              avatar: data.avatar,
              sender: data.uid === uid ? "user" : "other", // Check if sender is the user
              createdAt: createdAt, // Convert to a JavaScript Date object
            })
          })
          messageList.sort((a, b) => a.createdAt - b.createdAt)
          setMessages(messageList)
        }
      )
    return () => unsubscribe();
  }, [user]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Check if user is authenticated before accessing currentUser
    if (!user) {
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      name: displayName, // Pass the display name here
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    setNewMessage("");
  };

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
  );
}

export default Chat;
