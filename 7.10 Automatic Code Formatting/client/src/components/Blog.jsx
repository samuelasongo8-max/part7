import React from 'react'
import useBlogStore from '../stores/blogStore'

const Blog = ({ blog }) => {
  const likeBlog = useBlogStore((state) => state.likeBlog)
  const deleteBlog = useBlogStore((state) => state.deleteBlog)

  const handleLike = async () => {
    try {
      await likeBlog(blog.id)
    } catch (error) {
      console.error('Error liking blog:', error)
      // Optionally show a user notification here
    }
  }

  const handleDelete = async () => {
    const ok = window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)
    if (!ok) return
    try {
      await deleteBlog(blog.id)
    } catch (error) {
      console.error('Error deleting blog:', error)
      // Optionally show a user notification here
    }
  }

  return (
    <div className="blog">
      <div>
        <strong>{blog.title}</strong> {blog.author}
      </div>
      <div>{blog.url}</div>
      <div>
        likes {blog.likes || 0} <button onClick={handleLike}>like</button>
      </div>
      <div>
        <button onClick={handleDelete}>remove</button>
      </div>
    </div>
  )
}

export default Blog
