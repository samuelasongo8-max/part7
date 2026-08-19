import { useContext } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserContext } from '../contexts/UserContext'
import blogService from '../services/blogs'

const BlogList = ({ blogs }) => {
  const { user } = useContext(UserContext)
  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationFn: async (blog) => {
      return blogService.update(blog.id, { ...blog, votes: blog.votes + 1 })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })
    }
  })

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return blogService.deleteAnecdote(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })
    }
  })

  const handleLike = (blog) => {
    likeMutation.mutate(blog)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this blog?')) {
      deleteMutation.mutate(id)
    }
  }

  return (
    <div>
      <h2>Blogs</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogs.map(blog => (
          <li 
            key={blog.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}
          >
            <p><strong>{blog.content}</strong></p>
            <p>Author: {blog.author}</p>
            <p>
              Info: 
              <a href={blog.info} target="_blank" rel="noreferrer">
                {blog.info}
              </a>
            </p>
            <p>Votes: {blog.votes}</p>
            <div style={{ marginTop: '10px' }}>
              <button 
                onClick={() => handleLike(blog)}
                disabled={likeMutation.isPending || !user}
                style={{ marginRight: '10px' }}
              >
                👍 Like
              </button>
              <button 
                onClick={() => handleDelete(blog.id)}
                disabled={deleteMutation.isPending || !user}
                style={{ color: 'red' }}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
