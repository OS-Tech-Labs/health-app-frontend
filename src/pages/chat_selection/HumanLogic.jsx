// chatLogic.js
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../api/firebase.js"
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore"

export function useHumanLogic() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      return
    }

    const { uid, displayName, photoURL } = auth.currentUser

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
            sender: data.uid === uid ? "user" : "other",
            createdAt: createdAt,
          })
        })
        messageList.sort((a, b) => a.createdAt - b.createdAt)
        setMessages(messageList)
      }
    )

    return () => unsubscribe()
  }, [user])

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return

    if (!user) {
      return
    }

    const { uid, displayName, photoURL } = auth.currentUser

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    })

    setNewMessage("")
  }

  return { messages, newMessage, handleSendMessage, setNewMessage }
}
