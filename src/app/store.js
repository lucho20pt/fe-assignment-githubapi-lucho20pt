import { configureStore } from '@reduxjs/toolkit'
import githubSlice from 'features/github/githubSlice'
import { githubApi } from 'features/api/githubApi'

export const store = configureStore({
  reducer: {
    github: githubSlice.reducer,
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware)
})
