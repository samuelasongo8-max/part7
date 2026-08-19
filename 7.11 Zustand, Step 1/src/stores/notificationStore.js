import { create } from 'zustand'

export const useNotificationStore = create((set) => ({
  notification: '',
  showNotification: (message) => {
    set({ notification: message })
    setTimeout(() => set({ notification: '' }), 5000)
  },
  clearNotification: () => set({ notification: '' })
}))
