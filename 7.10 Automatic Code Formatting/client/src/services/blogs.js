const baseUrl = 'http://localhost:3003/api/blogs'

const getAll = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }
  return await response.json()
}

const create = async (blog) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  })
  if (!response.ok) {
    const err = await response.text()
    throw new Error(err || 'Failed to create blog')
  }
  return await response.json()
}

const update = async (id, updatedBlog) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedBlog),
  })
  if (!response.ok) {
    const err = await response.text()
    throw new Error(err || 'Failed to update blog')
  }
  return await response.json()
}

const remove = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    const err = await response.text()
    throw new Error(err || 'Failed to delete blog')
  }
  return true
}

export default { getAll, create, update, remove }
