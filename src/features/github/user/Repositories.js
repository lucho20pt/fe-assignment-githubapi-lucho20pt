import React from 'react'
import classes from 'styles/github/user/Repositories.module.scss'

const Repositories = (props) => {
  const repos = props.repos
  console.log(repos)
  return (
    <aside className={`${classes.repositories} text-center`}>
      <h4 className="title">User Repositories List</h4>
      <div className={classes.info}>
        {repos.map((repo) => (
          <dl key={repo.id}>
            <dt>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </dt>
            <dd>{repo.description ? repo.description : '*no-description*'}</dd>
            {/* <dd>{repo.html_url}</dd> */}
          </dl>
        ))}
      </div>
    </aside>
  )
}

export default Repositories
