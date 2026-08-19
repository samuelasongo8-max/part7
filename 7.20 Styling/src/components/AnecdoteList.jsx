const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2 className="section-title">Anecdotes</h2>

    <ul className="card-list">
      {anecdotes.map(anecdote => (
        <li key={anecdote.id}>
          <h3 className="card-title">{anecdote.content}</h3>
          <div className="card-meta">by {anecdote.author}</div>
        </li>
      ))}
    </ul>
  </div>
)

export default AnecdoteList