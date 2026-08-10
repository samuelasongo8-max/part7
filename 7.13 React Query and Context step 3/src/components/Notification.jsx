import { useNotification } from '../contexts/NotificationContext'

const Notification = () => {
  const { notification } = useNotification()

  if (!notification) {
    return null
  }

  return (
    <div
      style={{
        border: '2px solid green',
        padding: 10,
        marginBottom: 15,
        color: 'green',
        backgroundColor: '#f0fff0'
      }}
    >
      {notification}
    </div>
  )
}

export default Notification