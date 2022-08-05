import React, { useState } from 'react'
import classes from 'styles/github/Search.module.scss'
import { useGetUserNameMutation } from 'features/api/githubApi'
import { githubActions } from 'features/github/githubSlice'
import { useDispatch } from 'react-redux'

const Search = (props) => {
  //
  const [search, setSearch] = useState('')
  const [getUserName] = useGetUserNameMutation()
  const dispatch = useDispatch()

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
    // console.log('user ->', user)

    // request / result / verify
    try {
      // get response
      const userResponse = await getUserName(user).unwrap()
      // console.log('userObj ->', userResponse)
      dispatch(githubActions.addUser(userResponse))
      // onSuccessHandler()
    } catch (error) {
      // console.log('error -> ', error.status)
      // console.log('error -> ', error.data.message)
      onErrorHandler()
    }
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
