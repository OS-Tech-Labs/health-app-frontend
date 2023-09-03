import { createContext, useState } from "react"
export const AuthContext = createContext(null)

function AuthContextProvider(props) {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState("guest")

  const login = (user) => {
    setUser(user.name)
    setUserType(user.type)
  }

  const logout = () => {
    setUser(null)
    setUserType("guest")
  }

  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
