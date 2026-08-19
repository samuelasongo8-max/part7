import { create } from 'zustand'
import blogService from '../services/blogs'

export const useBlogStore = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    const blogs = await blogService.getAll()
    set({ blogs })
  },
  addBlog: async (blog) => {
    const createdBlog = await blogService.create(blog)
    set((state) => ({ blogs: state.blogs.concat(createdBlog) }))
    return createdBlog
  }
}))
