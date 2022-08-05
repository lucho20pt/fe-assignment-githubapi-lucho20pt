import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1 className="centered">
        Page Not Found <br /> 404
      </h1>
      <p className="centered">
        <Link className="btn" to="/">
          Return to Home
        </Link>
      </p>
    </div>
  )
}

export default NotFound
