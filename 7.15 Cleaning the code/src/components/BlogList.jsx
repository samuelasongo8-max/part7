import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Blog from './Blog'

const BlogList = ({ blogs, onLike, onDelete }) => {
  const { user } = useContext(UserContext)

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
            user={user}
            onLike={onLike}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}

export default BlogList
