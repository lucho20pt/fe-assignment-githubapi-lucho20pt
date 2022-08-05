import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserName: builder.query({
      query: ({ username }) => `users/${username}`,
      providesTags: ['Users']
    })
  })
})

export const { useGetUserNameQuery } = githubApi
