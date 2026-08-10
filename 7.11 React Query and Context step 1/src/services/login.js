const baseUrl = '/api/login'

const login = async (credentials) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  if (!response.ok) {
    throw new Error('Wrong username or password')
  }

  return await response.json()
}

export default {
  login
}