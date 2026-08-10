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
 
import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Notification />

        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={<BlogList />}
            />

            <Route
              path="/create"
              element={<BlogForm />}
            />

            <Route
              path="/login"
              element={<LoginForm />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  )
}

export default App