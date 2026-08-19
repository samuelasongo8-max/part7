import { createContext, useReducer, useCallback } from 'react'
import { notificationReducer, INITIAL_NOTIFICATION_STATE } from '../reducers/notificationReducer'

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, INITIAL_NOTIFICATION_STATE)

  const showNotification = useCallback((message, duration = 3000) => {
    dispatch({ type: 'SHOW', payload: message })
    
    if (duration > 0) {
      setTimeout(() => {
        dispatch({ type: 'HIDE' })
      }, duration)
    }
  }, [])

  const hideNotification = useCallback(() => {
    dispatch({ type: 'HIDE' })
  }, [])

  return (
    <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}
