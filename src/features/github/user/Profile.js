import React from 'react'
import classes from 'styles/github/user/Profile.module.scss'

const Profile = (props) => {
  const { login, name, public_repos, avatar_url } = props.user
  return (
    <aside className={`${classes.profile} text-center`}>
      <img
        className={classes.avatar_url}
        src={avatar_url}
        alt="profile avatar"
      />

      <div className={classes.info}>
        <dl>
          <dt>Name :</dt>
          <dd>{name}</dd>
        </dl>
        <dl>
          <dt>User :</dt>
          <dd>{login}</dd>
        </dl>
        <dl>
          <dt>Repositories :</dt>
          <dd>{public_repos}</dd>
        </dl>
      </div>
    </aside>
  )
}

export default Profile
