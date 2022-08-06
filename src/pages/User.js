import React from 'react'
// import { Link } from 'react-router-dom'
import UserDetail from 'features/github/UserDetail'

const Home = () => {
  return (
    <section className="container">
      <h1 className="title text-center">User Profile</h1>

      <UserDetail />
    </section>
  )
}

export default Home
