import { createSlice } from '@reduxjs/toolkit'

const initialGithubState = {
  users: [{ id: 0 }],
  changed: false
}

const githubSlice = createSlice({
  name: 'github',
  initialState: initialGithubState,
  reducers: {
    addUser(state, action) {
      // console.log('addUser')
      const newUser = action.payload
      // console.log(newUser);
      const existingUser = state.users.find((user) => user.id === newUser.id)
      state.changed = false
      if (!existingUser) {
        state.users = []
        state.users.push(newUser)
        state.changed = true
      }
      console.log(state.users[0])
      // console.log(state.users.length)
      // console.log('isStateChange ->', state.changed)
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
