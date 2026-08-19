import React, { useEffect } from 'react'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import useUserStore from './stores/userStore'

const App = () => {
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    const logged = window.localStorage.getItem('loggedBlogAppUser')
    if (logged) {
      try {
        const user = JSON.parse(logged)
        setUser(user)
      } catch (e) {
        // ignore parse errors
        console.error('Failed to parse stored user:', e)
      }
    }
  }, [setUser])

  return (
    <div>
      <Navbar />

      <section style={{ marginTop: '1rem' }}>
        <h2>Login</h2>
        <LoginForm />
      </section>

      <h1>Blogs</h1>
      <BlogForm />
      <hr />
      <BlogList />
    </div>
  )
}

export default App
