import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import About from './components/About'
import NotFound from './components/NotFound'

import { useNotificationStore } from './stores/notificationStore'
import { useBlogStore } from './stores/blogStore'

const App = () => {
  const showNotification = useNotificationStore((s) => s.showNotification)
  const setToken = useBlogStore((s) => s.setToken)

  const handleLogin = (credentials) => {
    // For this exercise the login flow is outside scope.
    // If you integrate authentication, call `setToken(token)` here.
    showNotification(`Logged in as ${credentials.username}`)
  }

  return (
    <Router>
      <div>
        <Navbar />

        <Notification />

        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App