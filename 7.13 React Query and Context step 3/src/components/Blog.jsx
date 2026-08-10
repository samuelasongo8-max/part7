import { useMutation, useQueryClient } from '@tanstack/react-query'
import blogService from '../services/blogs'

const Blog = ({ blog }) => {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: blogService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })
    }
  })

  const deleteMutation = useMutation({
    mutationFn: blogService.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })
    }
  })

  const handleLike = () => {
    updateMutation.mutate({
      ...blog,
      likes: blog.likes + 1
    })
  }

  const handleDelete = () => {
    deleteMutation.mutate(blog.id)
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px'
      }}
    >
      <h3>{blog.title}</h3>

      <p>
        <strong>Author:</strong> {blog.author}
      </p>

      <p>
        <strong>URL:</strong>{' '}
        <a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
        >
          {blog.url}
        </a>
      </p>

      <p>
        <strong>Likes:</strong> {blog.likes}
        <button
          onClick={handleLike}
          disabled={updateMutation.isPending}
          style={{ marginLeft: '10px' }}
        >
          {updateMutation.isPending ? 'Liking...' : 'Like'}
        </button>
      </p>

      <button
        onClick={handleDelete}
        disabled={deleteMutation.isPending}
        style={{ backgroundColor: '#ff6b6b', color: 'white', padding: '5px 10px' }}
      >
        {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}

export default Blog