import React, { Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import classes from 'styles/github/UserDetail.module.scss'
import { useGetUserReposQuery } from 'features/api/githubApi'
import { useSelector } from 'react-redux'
import NoUser from './user/NoUser'
import Profile from './user/Profile'
import Repositories from './user/Repositories'
import Loading from 'components/ui/Loading'

const UserDetail = (props) => {
  //
  const user = useSelector((state) => state.github.users[0])
  const params = useParams()
  const { userId } = params

  const {
    data: repos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserReposQuery(user.login)

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
        <div className={`${classes.details} centered`}>
          <Profile user={{ ...user }} />
          {isLoading && <Loading />}
          {isSuccess && <Repositories repos={repos} />}
          {isError && <p>error found: {error.message}</p>}
        </div>
        <p>
          <Link className="btn" to="/search">
            Go Back to Search
          </Link>
        </p>
      </Fragment>
    )
  }

  return (
    <article className={`${classes.userdetail} ${'centered'}`}>
      {content}
    </article>
  )
}

export default UserDetail
