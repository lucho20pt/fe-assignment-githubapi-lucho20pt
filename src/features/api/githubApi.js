import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserName: builder.mutation({
      query: (username) => ({
        url: `/users/${username}`,
        method: 'GET'
      })
    }),
    getUserRepos: builder.query({
      query: (login) => `/users/${login}/repos`,
      // query: ({ login }) => `/users/lucho20pt/repos`,
      providesTags: ['User']
    })
  })
})

export const { useGetUserNameMutation, useGetUserReposQuery } = githubApi
