import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

const Notification = () => {
  const { notification } = useContext(NotificationContext)

  if (!notification.visible) {
    return null
  }

  return (
    <div style={{
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#e8f4f8',
      border: '1px solid #4db8da',
      borderRadius: '4px',
      color: '#004085'
    }}>
      {notification.message}
    </div>
  )
}

export default Notification