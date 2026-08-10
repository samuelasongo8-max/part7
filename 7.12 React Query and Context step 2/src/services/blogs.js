const baseUrl = 'http://localhost:3001/blogs'


const getAll = async () => {

  const response = await fetch(baseUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return response.json()

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


  return response.json()

}


const update = async (updatedBlog) => {

  const response = await fetch(`${baseUrl}/${updatedBlog.id}`, {

    method: 'PUT',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(updatedBlog)

  })


  if (!response.ok) {
    throw new Error('Failed to update blog')
  }


  return response.json()

}


const remove = async (id) => {

  const response = await fetch(`${baseUrl}/${id}`, {

    method: 'DELETE'

  })


  if (!response.ok) {
    throw new Error('Failed to delete blog')
  }


  return response.json()

}


export default {
  getAll,
  create,
  update,
  remove
}