import React from 'react'
// import { Link } from 'react-router-dom'
import UserDetail from 'features/github/UserDetail'

const Home = () => {
  return (
    <section className="container">
      <h1 className="title text-center">User Profile</h1>
      <h2 className="text-center">
        A page to display the user information and repositories.{' '}
      </h2>
      {/* <p className="text-center">
        It will need a button to go back to the Search page. <br />
        It displays <b>Profile picture</b>, <b>Name</b>,{' '}
        <b>Total number of repositories</b>, <b>List of repositories</b>{' '}
        (repository name and description)
      </p> */}
      <UserDetail />
    </section>
  )
}

export default Home
