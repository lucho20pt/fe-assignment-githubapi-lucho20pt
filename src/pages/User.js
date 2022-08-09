import React from 'react'
// import { Link } from 'react-router-dom'
import UserDetail from 'features/github/UserDetail'

const User = () => {
  return (
    <section className="content">
      <h1 className="title text-center">User Profile</h1>

      <UserDetail />
    </section>
  )
}

export default User
