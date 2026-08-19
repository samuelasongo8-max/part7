const Blog = ({ blog, onLike, onDelete, user }) => {
  if (!blog) {
    return <div>Blog not found.</div>
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>{blog.title}</h3>
      <p>Author: {blog.author}</p>
      <p>
        URL:{' '}
        <a href={blog.url} target="_blank" rel="noreferrer">
          {blog.url}
        </a>
      </p>
      <p>Likes: {blog.likes}</p>
      <button onClick={() => onLike(blog)} disabled={!user}>
        👍 Like
      </button>
      <button
        onClick={() => onDelete(blog.id)}
        disabled={!user}
        style={{ marginLeft: '10px', color: 'red' }}
      >
        🗑️ Delete
      </button>
    </div>
  )
}

export default Blog
