const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = newToken ? `Bearer ${newToken}` : null
}

const getHeaders = (json = true) => {
  const headers = {}
  if (json) headers['Content-Type'] = 'application/json'
  if (token) headers['Authorization'] = token
  return headers
}

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return await response.json()
}

const create = async (newBlog) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(newBlog)
  })

  if (!response.ok) {
    throw new Error('Failed to create blog')
  }

  return await response.json()
}

const update = async (id, updatedBlog) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: getHeaders(true),
    body: JSON.stringify(updatedBlog)
  })

  if (!response.ok) {
    throw new Error('Failed to update blog')
  }

  return await response.json()
}

const remove = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: getHeaders(false)
  })

  if (!response.ok) {
    throw new Error('Failed to delete blog')
  }
}

export default {
  getAll,
  create,
  update,
  remove,
  setToken
}
