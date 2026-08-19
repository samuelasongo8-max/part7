import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { useField } from '../hooks'

const LoginForm = () => {
  const username = useField('text')
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.inputProps.value.trim()) {
      login(username.inputProps.value)
      username.reset()
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
            {...username.inputProps}
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
