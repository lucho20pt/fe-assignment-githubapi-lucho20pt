import React, { useState } from 'react'
import classes from 'styles/github/Search.module.scss'

const Search = (props) => {
  //
  const [search, setSearch] = useState('')

  const [error, setError] = useState(false)
  const timeout = 2000

  // on change
  const changeHandler = (event) => {
    // console.log('value ->', event.target.value)
    const val = event.target.value
    setSearch(val)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const user = search.trimEnd()

    // if not empty field
    if (user === '') {
      onErrorHandler()
      return true
    }
    console.log('user ->', user)
  }

  // Error
  const onErrorHandler = () => {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, timeout)
  }

  return (
    <div className={`${classes.search} ${'centered'}`}>
      <h2 className="subtitle text-center">Start Searching for Github User</h2>
      <br />
      <form onSubmit={submitHandler}>
        <div className="row">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter username..."
            value={search}
            onChange={changeHandler}
          />{' '}
          <button type="submit" className="btn">
            Search
          </button>
        </div>
        {error && <p>Please enter the Github Username</p>}
      </form>
    </div>
  )
}

export default Search
