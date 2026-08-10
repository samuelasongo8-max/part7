import { createRoot } from 'react-dom/client'
import App from './App'

import { NotificationProvider } from './contexts/NotificationContext'

createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
)