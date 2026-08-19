import React from 'react'
import useUserStore from '../stores/userStore'

const Navbar = () => {
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <a href="#">blogs</a>
      {user ? (
        <div>
          {user.name || user.username} logged in{' '}
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <div>not logged in</div>
      )}
    </div>
  )
}

export default Navbar
