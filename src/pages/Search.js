import React from 'react'
// import { Link } from 'react-router-dom'
import Search from 'features/github/Search'

const Home = () => {
  return (
    <section className="container">
      <h1 className="title text-center">Search</h1>
      <p className="text-center">Type the username on the search field and make your search</p>
      <Search />
    </section>
  )
}

export default Home
