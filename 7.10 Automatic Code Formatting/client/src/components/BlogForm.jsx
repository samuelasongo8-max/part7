import React, { useState } from 'react'
import useBlogStore from '../stores/blogStore'

const BlogForm = () => {
  const addBlog = useBlogStore((state) => state.addBlog)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addBlog({ title, author, url })
      setTitle('')
      setAuthor('')
      setUrl('')
      // simple user feedback
      alert(`A new blog "${title}" by ${author} added`)
    } catch (error) {
      console.error('Failed to create blog:', error)
      alert('Failed to create blog')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new</h2>
      <div>
        title
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        author
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        url
        <input value={url} onChange={(e) => setUrl(e.target.value)} required />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm
