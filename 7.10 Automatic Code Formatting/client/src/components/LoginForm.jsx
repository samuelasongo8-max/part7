import React, { useState } from 'react'
import useUserStore from '../stores/userStore'

const LoginForm = () => {
  const login = useUserStore((state) => state.login)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await login({ username, password })
      // persist so the user remains logged in after reload
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      setUsername('')
      setPassword('')
      // feedback
      alert(`Welcome ${user.name || user.username}`)
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm
