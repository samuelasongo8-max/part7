import { useEffect } from 'react'
import { useBlogStore } from '../stores/blogStore'
import Blog from './Blog'

const BlogList = () => {
  const blogs = useBlogStore((state) => state.blogs)
  const initializeBlogs = useBlogStore((state) => state.initializeBlogs)

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs])

  return (
    <div>
      <h2>Blogs</h2>

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
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