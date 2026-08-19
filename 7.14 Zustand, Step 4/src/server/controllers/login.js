import { Router } from 'express'

const loginRouter = Router()

loginRouter.post('/', (request, response) => {
  const { username, password } = request.body

  if (username === 'admin' && password === 'secret') {
    const user = {
      username,
      name: 'Admin User',
      token: 'demo-token-123'
    }

    return response.status(200).json(user)
  }

  return response.status(401).json({ error: 'Wrong username or password' })
})

export default loginRouter