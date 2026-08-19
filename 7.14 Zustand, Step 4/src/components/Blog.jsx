import { useBlogStore } from '../stores/blogStore'

const Blog = ({ blog }) => {
  const likeBlog = useBlogStore((state) => state.likeBlog)
  const deleteBlog = useBlogStore((state) => state.deleteBlog)

  const handleLike = () => {
    likeBlog(blog)
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Remove blog "${blog.title}" by ${blog.author}?`
    )

    if (confirmDelete) {
      deleteBlog(blog.id)
    }
  }

  return (
    <div
      style={{
        border: '1px solid black',
        padding: 10,
        marginBottom: 10
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

      <button onClick={handleLike}>
        Like
      </button>

      <button
        onClick={handleDelete}
        style={{ marginLeft: 10 }}
      >
        Delete
      </button>
    </div>
  )
}

export default Blog