// Persistent user storage using localStorage
const STORAGE_KEY = 'loggedInUser'

export const persistentUser = {
  // Get the stored user from localStorage
  getStoredUser: () => {
    const storedUser = localStorage.getItem(STORAGE_KEY)
    return storedUser ? JSON.parse(storedUser) : null
  },

  // Save user to localStorage
  saveUser: (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  },

  // Remove user from localStorage
  removeUser: () => {
    localStorage.removeItem(STORAGE_KEY)
  },

  // Check if user exists in localStorage
  hasStoredUser: () => {
    return localStorage.getItem(STORAGE_KEY) !== null
  }
}
