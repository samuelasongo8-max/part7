const Blog = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found.</div>
  }

  return (
    <div>
      <h2>{blog.content}</h2>

      <div>
        by {blog.author}
      </div>

      <div>
        has {blog.votes} votes
      </div>

      <div>
        for more info see{' '}
        <a href={blog.info}>{blog.info}</a>
      </div>
    </div>
  )
}

export default Blog
