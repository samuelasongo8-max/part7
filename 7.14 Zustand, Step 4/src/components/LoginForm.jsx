import { useState } from 'react'
import { useUserStore } from '../stores/userStore'

const LoginForm = () => {
  const login = useUserStore((state) => state.login)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const user = await login({
      username,
      password
    })

    if (user) {
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div>
      <h2>Log in to application</h2>

      <form onSubmit={onSubmit}>
        <div>
          Username
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div>
          Password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm