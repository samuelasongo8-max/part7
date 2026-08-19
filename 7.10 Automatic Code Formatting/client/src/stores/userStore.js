import create from 'zustand'
import loginService from '../services/login'

const useUserStore = create((set) => ({
  user: null,
  token: null,

  // Sets user object (and token if present). Useful when restoring from localStorage
  setUser: (user) => set({ user, token: user?.token ?? null }),

  // Perform login via service and store result in the Zustand store
  login: async ({ username, password }) => {
    const user = await loginService.login({ username, password })
    set({ user, token: user.token })
    return user
  },

  // Logout clears the store
  logout: () => set({ user: null, token: null }),
}))

export default useUserStore
