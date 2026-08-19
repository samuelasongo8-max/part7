import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'

const BlogForm = ({ onCreate }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    onCreate({
      title: title.inputProps.value,
      author: author.inputProps.value,
      url: url.inputProps.value,
      likes: 0
    })

    title.reset()
    author.reset()
    url.reset()

    navigate('/')
  }

  const handleReset = () => {
    title.reset()
    author.reset()
    url.reset()
  }

  return (
    <div>
      <h2>Create a new blog</h2>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input {...title.inputProps} />
        </div>

        <div>
          author
          <input {...author.inputProps} />
        </div>

        <div>
          url
          <input {...url.inputProps} />
        </div>

        <button type="submit">
          create
        </button>

        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  )
}

export default BlogForm
