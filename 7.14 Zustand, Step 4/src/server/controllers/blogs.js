import { Router } from 'express'

const blogsRouter = Router()

// Temporary in-memory data
let blogs = [
  {
    id: '1',
    title: 'First blog',
    author: 'Alice',
    url: 'http://example.com/1',
    likes: 24
  },
  {
    id: '2',
    title: 'Second blog',
    author: 'Bob',
    url: 'http://example.com/2',
    likes: 12
  }
]

// GET all blogs
blogsRouter.get('/', (request, response) => {
  response.json(blogs)
})

// CREATE blog
blogsRouter.post('/', (request, response) => {
  const blog = {
    id: String(Date.now()),
    likes: 0,
    ...request.body
  }

  blogs.push(blog)

  response.status(201).json(blog)
})

// UPDATE likes/blog
blogsRouter.put('/:id', (request, response) => {
  const id = request.params.id

  blogs = blogs.map(blog =>
    blog.id === id ? { ...blog, ...request.body } : blog
  )

  const updated = blogs.find(blog => blog.id === id)

  response.json(updated)
})

// DELETE blog
blogsRouter.delete('/:id', (request, response) => {
  const id = request.params.id

  blogs = blogs.filter(blog => blog.id !== id)

  response.status(204).end()
})

export default blogsRouter