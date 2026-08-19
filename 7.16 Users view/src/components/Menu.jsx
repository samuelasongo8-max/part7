import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Navbar = () => {
  const { user, logout } = useContext(UserContext)

  const padding = {
    paddingRight: 15
  }

  return (
    <div style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
      <div>
        <Link style={padding} to="/">
          BLOGS
        </Link>

        <Link style={padding} to="/users">
          USERS
        </Link>

        <Link style={padding} to="/create">
          NEW BLOG
        </Link>

        {user && (
          <button 
            onClick={logout}
            style={{
              padding: '8px 15px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            LOGOUT
          </button>
        )}
      </div>

      {user && (
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          Logged in as: {user.username}
        </div>
      )}
    </div>
  )
}

export default Navbar