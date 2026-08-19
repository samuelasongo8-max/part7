import { createContext, useState, useEffect } from 'react'
import { persistentUser } from '../services/persistentUser'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = persistentUser.getStoredUser()
    if (storedUser) {
      setUser(storedUser)
    }
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    const userObj = typeof userData === 'string' ? { username: userData } : userData
    setUser(userObj)
    persistentUser.saveUser(userObj)
  }

  const logout = () => {
    setUser(null)
    persistentUser.removeUser()
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
