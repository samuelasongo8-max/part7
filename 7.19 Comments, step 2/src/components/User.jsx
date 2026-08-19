import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import usersService from '../services/users'

const User = () => {
  const { id } = useParams()
  
  const {
    data: user,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['users', id],
    queryFn: () => usersService.getById(id)
  })

  if (isLoading) {
    return <div>Loading user...</div>
  }

  if (isError || !user) {
    return <div>Failed to load user</div>
  }

  return (
    <div>
      <h2>{user.name}</h2>

      <h3>Added blogs</h3>

      {user.blogs && user.blogs.length > 0 ? (
        <ul>
          {user.blogs.map((blog, index) => (
            <li key={index}>{blog}</li>
          ))}
        </ul>
      ) : (
        <p>No blogs added yet</p>
      )}
    </div>
  )
}

export default User
