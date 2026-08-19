import { useQuery } from '@tanstack/react-query'
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
import LoginForm from './components/LoginForm'
import anecdoteService from './services/anecdotes'

const App = () => {
  const {
    data: anecdotes = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: anecdoteService.getAll
  })

  if (isLoading) {
    return <div>Loading anecdotes...</div>
  }

  if (isError) {
    return <div>Failed to load anecdotes</div>
  }

  return (
    <Router>
      <div>
        <h1>Software anecdotes</h1>

        <Menu />

        <Routes>
          <Route
            path="/"
            element={<AnecdoteList anecdotes={anecdotes} />}
          />

          <Route
            path="/create"
            element={<CreateNew />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/login"
            element={<LoginForm />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App