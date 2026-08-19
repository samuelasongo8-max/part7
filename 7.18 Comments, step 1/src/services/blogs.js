const baseUrl = 'http://localhost:3001/blogs'

const getAll = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return await response.json()
}

const createNew = async (object) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create blog')
  }
  
  return await response.json()
}

const update = async (id, updatedObject) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedObject),
  })
  
  if (!response.ok) {
    throw new Error('Failed to update blog')
  }
  
  return await response.json()
}

const deleteAnecdote = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error('Failed to delete blog')
  }
}

const getById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch blog')
  }

  return await response.json()
}

const addComment = async (id, comment) => {
  const response = await fetch(`${baseUrl}/${id}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment }),
  })

  if (response.ok) {
    return await response.json()
  }

  const blog = await getById(id)
  const comments = Array.isArray(blog.comments)
    ? blog.comments.concat(comment)
    : [comment]

  const patchResponse = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comments }),
  })

  if (!patchResponse.ok) {
    throw new Error('Failed to add comment')
  }

  return await patchResponse.json()
}

export default { getAll, createNew, update, deleteAnecdote, getById, addComment }
