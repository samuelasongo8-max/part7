export const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return {
        message: action.payload,
        visible: true
      }
    case 'HIDE':
      return {
        message: '',
        visible: false
      }
    default:
      return state
  }
}

export const INITIAL_NOTIFICATION_STATE = {
  message: '',
  visible: false
}
