import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addAnecdote = (anecdote) => {
    setAnecdotes(
      anecdotes.concat({
        ...anecdote,
        id: Math.round(Math.random() * 10000)
      })
    )
  }

  return (
    <Router>
      <div className="app-shell">
        <h1 className="page-title">Software anecdotes</h1>
        <p className="page-subtitle">A polished place to discover, share, and discuss your favorite stories.</p>

        <Menu />

        <div className="content-card">
          <Routes>
            <Route
              path="/"
              element={<AnecdoteList anecdotes={anecdotes} />}
            />

            <Route
              path="/create"
              element={<CreateNew addAnecdote={addAnecdote} />}
            />

            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App