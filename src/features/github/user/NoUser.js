import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NoUser = () => {
  return (
    <Fragment>
      <h3>You haven't searched for a github username yet</h3>
      <p>
        <Link className="btn" to="/search">
          GoTo Search Page
        </Link>
      </p>
    </Fragment>
  )
}

export default NoUser
