import React from 'react'
// import { Link } from 'react-router-dom'
// import UserDetail from 'features/github/UserDetail'

const Home = () => {
  return (
    <section className="container">
      <h1 className="title text-center">User Profile</h1>
      <p className="text-center">
        <strong>The user page</strong> - A page to display the user information
        and repositories. <br /> It will need a button to go back to the Search
        page.
      </p>
      <p className="text-center">
        <strong>It displays the:</strong> <br /> Profile picture | Name | Total
        number of repositories | List of repositories (repository name and
        description)
      </p>
      {/* <UserDetail /> */}
    </section>
  )
}

export default Home
