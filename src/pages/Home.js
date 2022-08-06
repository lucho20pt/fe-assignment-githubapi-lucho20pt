import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="content">
      <h1 className="title text-center">Wellcome Home</h1>
      <div className="centered">
        <p>
          This is the coding challenge for the front-end development. <br /> To
          read more about the app
        </p>
        <p>
          <Link className="btn btn-small" to="/about">
            Read About
          </Link>
        </p>
      </div>
      <h2 className="title text-center">Search for Github User by typing the username</h2>
      <div className="centered">
        <p>
          <strong>The search page</strong> - It needs to have at least one input
          to type the Github username you want to search for and a button that
          will trigger the search.          
        </p>
        <p>Click on the button to test it out</p>
        <p>
          <Link className="btn btn-small" to="/search">
            Search
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Home
