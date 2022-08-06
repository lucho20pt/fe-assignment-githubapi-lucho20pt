import React, { Fragment, useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'
import classes from 'styles/github/UserDetail.module.scss'
import { useSelector } from 'react-redux'
import NoUser from './NoUser'

const UserDetail = (props) => {
  //
  const user = useSelector((state) => state.github.users[0])
  const params = useParams()
  const { userId } = params

  let content
  // if no user has been searched
  if (user.id === 0 || user.id !== Number(userId)) {
    content = <NoUser />
  }
  // render user Profile
  if (user.id !== 0 && user.id === Number(userId)) {
    content = (
      <Fragment>
        <h3>A page to display the user information and repositories. </h3>
        <p>
          <Link className="btn btn-small" to="/search">
            Go Back
          </Link>
        </p>
      </Fragment>
    )
  }

  return (
    <article className={`${classes.userdetail} ${'centered'}`}>
      id: {user.id} <br />
      paramsID: {userId}
      {content}
    </article>
  )
}

export default UserDetail
