import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useField } from '../hooks'
import blogService from '../services/blogs'

const BlogForm = () => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const createMutation = useMutation({
    mutationFn: blogService.createNew,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })
      navigate('/')
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    createMutation.mutate({
      content: content.inputProps.value,
      author: author.inputProps.value,
      info: info.inputProps.value,
      votes: 0
    })

    content.reset()
    author.reset()
    info.reset()
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>Create a new blog</h2>

      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.inputProps} />
        </div>

        <div>
          author
          <input {...author.inputProps} />
        </div>

        <div>
          url for more info
          <input {...info.inputProps} />
        </div>

        <button type="submit" disabled={createMutation.isPending}>
          {createMutation.isPending ? 'creating...' : 'create'}
        </button>

        <button
          type="button"
          onClick={handleReset}
        >
          reset
        </button>
      </form>
    </div>
  )
}

export default BlogForm
