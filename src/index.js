import React from "react"
import ReactDOM from "react-dom/client"
// import "./index.css"
import App from "./App"
import { configureStore } from "@reduxjs/toolkit"
// import globalReducer from "./state"
import { Provider } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
// import { createTheme } from "@mui/material/styles"
// import { themeSettings } from "./Themes"
import AuthContextProvider from "./context/AuthContext"

const mode = "light"
// const theme = createTheme(themeSettings(mode))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </AuthContextProvider>
)
