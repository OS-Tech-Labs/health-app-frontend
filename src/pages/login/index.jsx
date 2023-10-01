import React, { useState } from "react"
import GoogleSignin from "../../assets/btn_google_signin.png"
import { auth } from "../../api/firebase.js"
import { useAuthState } from "react-firebase-hooks/auth"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  const signOut = () => {
    auth.signOut()
  }

  return (
    <nav className="nav-bar">
      <h1>React Chat </h1>
      {user ? (
        <div>
        
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
          <button
            onClick={() => {
              navigate("/chat_selection")
            }}
            className="sign-out"
            type="button"
          >
            Next
          </button>
        </div>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  )
}
export default Login
