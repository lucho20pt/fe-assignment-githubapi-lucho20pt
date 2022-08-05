import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserName: builder.mutation({
      query: (username) => ({
        url: `users/${username}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetUserNameMutation } = githubApi
