import { Link } from 'react-router-dom'
import { useUserStore } from '../stores/userStore'

const Navbar = () => {
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout)

  const linkStyle = {
    paddingRight: 10
  }

  return (
    <nav>
      <Link to="/" style={linkStyle}>
        Blogs
      </Link>

      <Link to="/create" style={linkStyle}>
        Create Blog
      </Link>

      {user ? (
        <>
          <span style={{ paddingRight: 10 }}>
            {user.username} logged in
          </span>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      )}
    </nav>
  )
}

export default Navbar