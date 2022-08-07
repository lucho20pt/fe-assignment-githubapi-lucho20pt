import React, { Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import classes from 'styles/github/UserDetail.module.scss'
import { useSelector } from 'react-redux'
import NoUser from './user/NoUser'
import Profile from './user/Profile'
import Repositories from './user/Repositories'

const UserDetail = (props) => {
  //
  const user = useSelector((state) => state.github.users[0])
  const params = useParams()
  const { userId } = params
  const repository = {}

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
        <div className="row-block">
          <Profile user={{ ...user }} />
          <Repositories repository={{ ...repository }} />
        </div>
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
      {content}
      {/* List of repositories (repository name and description) */}
    </article>
  )
}

export default UserDetail
