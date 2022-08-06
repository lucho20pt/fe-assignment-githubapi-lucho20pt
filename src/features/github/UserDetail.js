import React, { useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'
import classes from 'styles/github/UserDetail.module.scss'
import { useSelector } from 'react-redux'

const UserDetail = (props) => {
  //
  const user = useSelector((state) => state.github.users[0])

  let content
  if (user.id === 0) {
    content = (
      <div className="centered">
        <h3>You haven't searched for a github username yet</h3>
        <p>
          <Link className="btn btn-small" to="/search">
            GoTo Search Page
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className={`${classes.userdetail} ${'centered'}`}>
      id: {user?.id}
      {content}
    </div>
  )
}

export default UserDetail
