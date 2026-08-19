import { useQuery } from '@tanstack/react-query'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Menu'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import BlogDetails from './components/BlogDetails'
import About from './components/About'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Users from './components/Users'
import User from './components/User'
import blogService from './services/blogs'

const App = () => {
  const {
    data: blogs = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAll
  })

  if (isLoading) {
    return <div>Loading blogs...</div>
  }

  if (isError) {
    return <div>Failed to load blogs</div>
  }

  return (
    <Router>
      <div>
        <h1>Blogs</h1>

        <Navbar />
        <Notification />

        <Routes>
          <Route
            path="/"
            element={<BlogList blogs={blogs} />}
          />

          <Route
            path="/blogs"
            element={<BlogList blogs={blogs} />}
          />

          <Route
            path="/blogs/:id"
            element={<BlogDetails />}
          />

          <Route
            path="/create"
            element={<BlogForm />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/users/:id"
            element={<User />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/login"
            element={<LoginForm />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App