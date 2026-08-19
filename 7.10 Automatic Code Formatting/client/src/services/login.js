const baseUrl = 'http://localhost:3003/api/login'

const login = async ({ username, password }) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(err || 'Login failed')
  }

  return await response.json()
}

export default { login }
