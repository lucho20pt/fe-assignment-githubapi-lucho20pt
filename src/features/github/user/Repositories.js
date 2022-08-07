import React from 'react'
import classes from 'styles/github/user/Repositories.module.scss'

const Repositories = (props) => {
  // const { name } = props.repository
  return (
    <aside className={`${classes.repositories} text-center`}>
      <h4 className='title'>User Repositories List</h4>
      <div className={classes.info}>
      <dl>
        <dt>Nome_nome</dt>
        <dd>descrição do projecto</dd>
      </dl>
      <dl>
        <dt>Nome</dt>
        <dd>descrição do projecto</dd>
      </dl></div>
    </aside>
  )
}

export default Repositories
