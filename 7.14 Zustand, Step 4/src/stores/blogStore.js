import { create } from 'zustand'
import blogService from '../services/blogs'
import { useNotificationStore } from './notificationStore'

export const useBlogStore = create((set) => ({
	blogs: [],
	initializeBlogs: async () => {
		try {
			const blogs = await blogService.getAll()
			set({ blogs })
		} catch (error) {
			useNotificationStore.getState().showNotification('Failed to fetch blogs')
		}
	},
	addBlog: async (newBlog) => {
		try {
			const createdBlog = await blogService.create(newBlog)
			set((state) => ({ blogs: state.blogs.concat(createdBlog) }))
			useNotificationStore.getState().showNotification(`Blog '${createdBlog.title}' added`)
			return createdBlog
		} catch (error) {
			useNotificationStore.getState().showNotification('Failed to create blog')
			throw error
		}
	},
	likeBlog: async (blog) => {
		try {
			const updated = { ...blog, likes: (blog.likes || 0) + 1 }
			const returnedBlog = await blogService.update(blog.id, updated)
			set((state) => ({ blogs: state.blogs.map((b) => (b.id === blog.id ? returnedBlog : b)) }))
			return returnedBlog
		} catch (error) {
			useNotificationStore.getState().showNotification('Failed to like blog')
			throw error
		}
	},
	deleteBlog: async (id) => {
		try {
			await blogService.remove(id)
			set((state) => ({ blogs: state.blogs.filter((b) => b.id !== id) }))
			useNotificationStore.getState().showNotification('Blog removed')
		} catch (error) {
			useNotificationStore.getState().showNotification('Failed to delete blog')
			throw error
		}
	},
	setToken: (token) => {
		blogService.setToken(token)
	}
}))
