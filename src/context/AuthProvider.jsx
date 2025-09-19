import React, { useEffect, createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  localStorage.clear()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData({ employee })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
