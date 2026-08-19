import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { UserContext } from '../contexts/UserContext'
import blogService from '../services/blogs'

const BlogDetails = () => {
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const queryClient = useQueryClient()

  const {
    data: blog,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['blogs', id],
    queryFn: () => blogService.getById(id)
  })

  const likeMutation = useMutation({
    mutationFn: async () => {
      return blogService.update(blog.id, { ...blog, votes: blog.votes + 1 })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })
      queryClient.invalidateQueries({
        queryKey: ['blogs', id]
      })
    }
  })

  const handleLike = () => {
    likeMutation.mutate()
  }

  if (isLoading) {
    return <div>Loading blog...</div>
  }

  if (isError || !blog) {
    return <div>Failed to load blog</div>
  }

  return (
    <div>
      <h2>{blog.content}</h2>

      <p>by {blog.author}</p>

      <p>
        <a href={blog.info} target="_blank" rel="noreferrer">
          {blog.info}
        </a>
      </p>

      <p>
        {blog.votes} {blog.votes === 1 ? 'like' : 'likes'}
        {' '}
        <button 
          onClick={handleLike}
          disabled={likeMutation.isPending || !user}
        >
          👍 Like
        </button>
      </p>

      <h3>Comments</h3>
      {blog.comments && blog.comments.length > 0 ? (
        <ul>
          {blog.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  )
}

export default BlogDetails
