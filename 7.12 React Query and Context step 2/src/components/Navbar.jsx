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
        to="/login"
        style={linkStyle}
      >
        Login
      </Link>

      <Link
        to="/about"
        style={linkStyle}
      >
        About
      </Link>
    </nav>
  )
}

export default Navbar