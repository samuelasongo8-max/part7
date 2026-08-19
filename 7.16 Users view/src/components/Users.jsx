import { useQuery } from '@tanstack/react-query'
import usersService from '../services/users'

const Users = () => {
  const {
    data: users = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['users'],
    queryFn: usersService.getAll
  })

  if (isLoading) {
    return <div>Loading users...</div>
  }

  if (isError) {
    return <div>Failed to load users</div>
  }

  return (
    <div>
      <h2>Users</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
      }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{user.name}</td>
              <td style={{ padding: '10px' }}>{user.blogs ? user.blogs.length : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
