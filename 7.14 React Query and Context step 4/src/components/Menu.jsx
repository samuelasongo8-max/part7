import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Menu = () => {
  const { user, logout } = useContext(UserContext)

  const padding = {
    paddingRight: 5
  }

  return (
    <div style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
      <div>
        <Link style={padding} to="/">
          anecdotes
        </Link>

        <Link style={padding} to="/create">
          create new
        </Link>

        <Link style={padding} to="/about">
          about
        </Link>
      </div>

      <div style={{ marginTop: '10px' }}>
        {user ? (
          <div>
            <span>Logged in as: <strong>{user.username}</strong></span>
            <button 
              onClick={logout}
              style={{ marginLeft: '10px' }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  )
}

export default Menu