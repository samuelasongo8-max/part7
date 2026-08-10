import { useQuery } from '@tanstack/react-query'
import blogService from '../services/blogs'
import Blog from './Blog'

const BlogList = () => {
  const {
    data: blogs = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAll
  })

  if (isLoading) {
    return <p>Loading blogs...</p>
  }

  if (isError) {
    return <p>Failed to load blogs.</p>
  }

  return (
    <div>
      <h2>Blogs</h2>

      {blogs.map(blog => (
        <Blog 
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  )
}

export default BlogList