import { legacy_createStore as createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  theme: 'light',
  users: [],
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'init':
      return { ...state, users: rest.users }
    case 'add-user':
      const newUsers = [...state.users, rest.user]
      newUsers.sort((a, b) => b.rating - a.rating)

      localStorage.setItem('users', JSON.stringify(newUsers))

      return { ...state, users: newUsers }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
