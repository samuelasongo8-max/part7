import { useContext } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserContext } from '../contexts/UserContext'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = ({ anecdotes }) => {
  const { user } = useContext(UserContext)
  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationFn: async (anecdote) => {
      return anecdoteService.update(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['anecdotes']
      })
    }
  })

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return anecdoteService.deleteAnecdote(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['anecdotes']
      })
    }
  })

  const handleLike = (anecdote) => {
    likeMutation.mutate(anecdote)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this anecdote?')) {
      deleteMutation.mutate(id)
    }
  }

  return (
    <div>
      <h2>Anecdotes</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {anecdotes.map(anecdote => (
          <li 
            key={anecdote.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}
          >
            <p><strong>{anecdote.content}</strong></p>
            <p>Author: {anecdote.author}</p>
            <p>
              Info: 
              <a href={anecdote.info} target="_blank" rel="noreferrer">
                {anecdote.info}
              </a>
            </p>
            <p>Votes: {anecdote.votes}</p>
            <div style={{ marginTop: '10px' }}>
              <button 
                onClick={() => handleLike(anecdote)}
                disabled={likeMutation.isPending || !user}
                style={{ marginRight: '10px' }}
              >
                👍 Like
              </button>
              <button 
                onClick={() => handleDelete(anecdote.id)}
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

export default AnecdoteList