import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import blogService from '../services/blogs'


const BlogForm = () => {

  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const newBlogMutation = useMutation({

    mutationFn: blogService.create,

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ['blogs']
      })

    }

  })


  const handleSubmit = (event) => {

    event.preventDefault()

    newBlogMutation.mutate({

      title,
      author,
      url,
      likes: 0

    })


    setTitle('')
    setAuthor('')
    setUrl('')

  }


  return (

    <div>

      <h2>Create New Blog</h2>


      <form onSubmit={handleSubmit}>


        <div>
          Title

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>


        <div>
          Author

          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

        </div>


        <div>
          URL

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

        </div>


        <button type="submit">
          Create
        </button>


      </form>


    </div>

  )

}


export default BlogForm