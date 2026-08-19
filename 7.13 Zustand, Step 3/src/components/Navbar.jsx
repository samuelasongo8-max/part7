import { Link } from 'react-router-dom'

const Navbar = () => {
  const linkStyle = {
    paddingRight: 10
  }

  return (
    <nav>
      <Link
        to="/"
        style={linkStyle}
      >
        Blogs
      </Link>

      <Link
        to="/create"
        style={linkStyle}
      >
        Create Blog
      </Link>

      <Link
        to="/users"
        style={linkStyle}
      >
        Users
      </Link>

      <Link
        to="/login"
        style={linkStyle}
      >
        Login
      </Link>
    </nav>
  )
}

export default Navbar