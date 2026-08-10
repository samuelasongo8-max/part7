const Blog = ({ blog }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px'
      }}
    >
      <h3>{blog.title}</h3>

      <p>
        <strong>Author:</strong> {blog.author}
      </p>

      <p>
        <strong>URL:</strong>{' '}
        <a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
        >
          {blog.url}
        </a>
      </p>

      <p>
        <strong>Likes:</strong> {blog.likes}
      </p>
    </div>
  )
}

export default Blog