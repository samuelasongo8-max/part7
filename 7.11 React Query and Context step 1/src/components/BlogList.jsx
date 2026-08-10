import { useEffect, useState } from 'react'
import Blog from './Blog'
import blogService from '../services/blogs'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService
      .getAll()
      .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      <h2>Blogs</h2>

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
          />
        ))
      )}
    </div>
  )
}

export default BlogList