import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      login(username)
      navigate('/')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '20px 0' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
