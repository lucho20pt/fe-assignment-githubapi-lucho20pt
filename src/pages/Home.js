import React from 'react'
import { Link } from 'react-router-dom'
import Search from 'components/github/Search'

const Home = () => {
  return (
    <section className="container">
      <h1 className="title text-center">Wellcome Home</h1>
      <div className="centered">
        <p>
          This is the coding challenge for the front-end development. <br /> To
          read more about the app
        </p>
        <p>
          <Link className="btn btn-small" to="/about">
            click here
          </Link>
        </p>
      </div>
      <Search />
    </section>
  )
}

export default Home
