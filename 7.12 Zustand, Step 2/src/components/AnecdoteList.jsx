import { useBlogStore } from '../stores/blogStore'

const AnecdoteList = () => {
  const anecdotes = useBlogStore((state) => state.blogs)

  return (
    <div>
      <h2>Anecdotes</h2>

      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            {anecdote.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
