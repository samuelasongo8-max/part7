const baseUrl = '/api/login'

export const login = async (credentials) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })

  if (!response.ok) {
    throw new Error('Failed to login')
  }

  return await response.json()
}
