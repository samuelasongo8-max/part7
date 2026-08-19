const Anecdote = ({ anecdote }) => {
  if (!anecdote) {
    return <div className="panel">Anecdote not found.</div>
  }

  return (
    <div className="panel">
      <h2 className="section-title">{anecdote.content}</h2>

      <div className="card-meta">by {anecdote.author}</div>

      <div style={{ marginTop: '8px' }}>
        has {anecdote.votes} votes
      </div>

      <div style={{ marginTop: '8px' }}>
        for more info see{' '}
        <a href={anecdote.info}>{anecdote.info}</a>
      </div>
    </div>
  )
}

export default Anecdote