import { create } from 'zustand'
import loginService from '../services/login'
import blogService from '../services/blogs'

const STORAGE_KEY = 'loggedBlogAppUser'

const getStoredUser = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const storedUser = window.localStorage.getItem(STORAGE_KEY)

  if (!storedUser) {
    return null
  }

  try {
    const parsedUser = JSON.parse(storedUser)

    if (parsedUser?.token) {
      blogService.setToken(parsedUser.token)
    }

    return parsedUser
  } catch {
    window.localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

const storedUser = getStoredUser()

export const useUserStore = create((set) => ({
  user: storedUser,

  setUser: (user) => {
    if (user) {
      blogService.setToken(user.token)
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } else {
      blogService.setToken(null)
      window.localStorage.removeItem(STORAGE_KEY)
    }

    set({ user })
  },

  login: async (credentials) => {
    const user = await loginService.login(credentials)
    set({ user })
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    blogService.setToken(user.token)
    return user
  },

  logout: () => {
    blogService.setToken(null)
    window.localStorage.removeItem(STORAGE_KEY)
    set({ user: null })
  }
}))