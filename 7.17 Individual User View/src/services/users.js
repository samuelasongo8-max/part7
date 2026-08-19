const baseUrl = 'http://localhost:3001/users'

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return await response.json()
}

const getById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return await response.json()
}

export default { getAll, getById }
