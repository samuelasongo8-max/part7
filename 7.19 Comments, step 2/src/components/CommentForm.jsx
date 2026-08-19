import { useField } from '../hooks'

const CommentForm = ({ onAddComment, isPending }) => {
  const comment = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()

    const content = comment.inputProps.value.trim()
    if (!content) return

    onAddComment(content)
    comment.reset()
  }

  return (
    <div>
      <h3>Add a comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" style={{ display: 'block', marginBottom: '8px' }}>
          Type comment
        </label>
        <input
          id="comment"
          {...comment.inputProps}
          placeholder="Type comment"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Adding...' : 'Add Comment'}
        </button>
      </form>
    </div>
  )
}

export default CommentForm
