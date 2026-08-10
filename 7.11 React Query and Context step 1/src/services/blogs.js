const baseUrl = '/api/blogs'

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
    headers: {
      'Content-Type': 'application/json'
    },
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
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedBlog)
  })

  if (!response.ok) {
    throw new Error('Failed to update blog')
  }

  return await response.json()
}

const remove = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error('Failed to delete blog')
  }
}

export default {
  getAll,
  create,
  update,
  remove
}