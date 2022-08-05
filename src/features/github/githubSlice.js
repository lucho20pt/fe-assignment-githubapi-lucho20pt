import { createSlice } from '@reduxjs/toolkit'

const initialGithubState = {
  users: [],
  changed: false
}

const githubSlice = createSlice({
  name: 'github',
  initialState: initialGithubState,
  reducers: {
    addUser(state, action) {
      //   console.log('addUser')
      const newUser = action.payload
      const existingUser = state.users.find((user) => user.id === newUser.id)
      state.changed = true
      if (!existingUser) {
        state.users.push(newUser)
      }
    },
    removeUser(state, action) {
      //   console.log('removeUser')
      const id = action.payload
      //   console.log(id)
      const existingUser = state.users.find((user) => user.id === id)
      if (existingUser) {
        state.users = state.users.filter((user) => user.id !== id)
      }
    }
  }
})

export const githubActions = githubSlice.actions

export default githubSlice
