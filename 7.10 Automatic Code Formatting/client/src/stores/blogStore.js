import create from 'zustand'
import blogsService from '../services/blogs'

const useBlogStore = create((set, get) => ({
  blogs: [],

  initializeBlogs: async () => {
    try {
      const blogs = await blogsService.getAll()
      set({ blogs: blogs.sort((a, b) => b.likes - a.likes) })
    } catch (error) {
      console.error('Failed to initialize blogs:', error)
    }
  },

  addBlog: async (blogObject) => {
    try {
      // Ensure likes defaults to 0 if not provided
      const toCreate = { likes: 0, ...blogObject }
      const newBlog = await blogsService.create(toCreate)
      set((state) => ({ blogs: [...state.blogs, newBlog].sort((a, b) => b.likes - a.likes) }))
      return newBlog
    } catch (error) {
      console.error('Failed to add blog:', error)
      throw error
    }
  },


  likeBlog: async (id) => {
    try {
      const blog = get().blogs.find((b) => b.id === id)
      if (!blog) throw new Error('Blog not found')

      const updated = { ...blog, likes: (blog.likes || 0) + 1 }
      const returned = await blogsService.update(id, updated)

      set((state) => ({
        blogs: state.blogs
          .map((b) => (b.id === id ? returned : b))
          .sort((a, b) => b.likes - a.likes),
      }))
      return returned
    } catch (error) {
      console.error('Failed to like blog:', error)
      throw error
    }
  },

  deleteBlog: async (id) => {
    try {
      await blogsService.remove(id)
      set((state) => ({ blogs: state.blogs.filter((b) => b.id !== id) }))
      return true
    } catch (error) {
      console.error('Failed to delete blog:', error)
      throw error
    }
  },
}))

export default useBlogStore
