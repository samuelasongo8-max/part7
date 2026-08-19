import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="navbar">
      <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">
        anecdotes
      </NavLink>

      <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/create">
        create new
      </NavLink>

      <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">
        about
      </NavLink>
    </nav>
  )
}

export default Menu