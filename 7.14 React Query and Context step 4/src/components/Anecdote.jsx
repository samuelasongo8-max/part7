import { useContext } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserContext } from '../contexts/UserContext'
import anecdoteService from '../services/anecdotes'

const Anecdote = ({ anecdote }) => {
  const { user } = useContext(UserContext)
  const queryClient = useQueryClient()

  if (!anecdote) {
    return <div>Anecdote not found.</div>
  }

  const likeMutation = useMutation({
    mutationFn: async () => {
      return anecdoteService.update(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['anecdotes']
      })
    }
  })

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return anecdoteService.deleteAnecdote(anecdote.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['anecdotes']
      })
    }
  })

  const handleLike = () => {
    likeMutation.mutate()
  }

  const handleDelete = () => {
    if (window.confirm('Delete this anecdote?')) {
      deleteMutation.mutate()
    }
  }

  return (
    <div>
      <h2>{anecdote.content}</h2>

      <div>
        by {anecdote.author}
      </div>

      <div>
        has {anecdote.votes} votes
      </div>

      <div>
        for more info see{' '}
        <a href={anecdote.info}>{anecdote.info}</a>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={handleLike}
          disabled={likeMutation.isPending || !user}
          style={{ marginRight: '10px' }}
        >
          👍 Like
        </button>
        <button 
          onClick={handleDelete}
          disabled={deleteMutation.isPending || !user}
          style={{ color: 'red' }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}

export default Anecdote