import React, { useState } from 'react'
import { authService } from '../services/authentication'

interface isAuthContext {
  logout: () => void;
  login: (token: any) => void;
  user: null | any;
}

export const AuthContext = React.createContext({} as isAuthContext)

export function AuthContextProvider({ children }: any) {

  const [user, setUser] = useState(() => {
    return authService.getUser()
  })

  function logout() {
    authService.logout()
    setUser(null)
  }

  function login(token: any) {
    const user = authService.login(token)
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{
      logout,
      login,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
