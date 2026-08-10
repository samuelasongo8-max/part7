import {
  createContext,
  useContext,
  useReducer
} from 'react'

import notificationReducer from '../reducers/notificationReducer'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(
    notificationReducer,
    null
  )

  return (
    <NotificationContext.Provider
      value={{
        notification,
        dispatch
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}