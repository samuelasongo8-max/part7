import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'

const CreateNew = ({ addAnecdote }) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    addAnecdote({
      content: content.inputProps.value,
      author: author.inputProps.value,
      info: info.inputProps.value,
      votes: 0
    })

    navigate('/')
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2 className="section-title">Create a new anecdote</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-row">
          <label className="form-label" htmlFor="content">content</label>
          <input id="content" className="input" {...content.inputProps} />
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="author">author</label>
          <input id="author" className="input" {...author.inputProps} />
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="info">url for more info</label>
          <input id="info" className="input" {...info.inputProps} />
        </div>

        <div className="button-row">
          <button className="button button-primary" type="submit">
            create
          </button>

          <button
            className="button button-secondary"
            type="button"
            onClick={handleReset}
          >
            reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateNew