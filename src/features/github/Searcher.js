import React, { useState } from 'react'
import classes from 'styles/github/Search.module.scss'
import { useGetUserNameMutation } from 'features/api/githubApi'
import { githubActions } from 'features/github/githubSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from 'components/ui/Loading'

const Searcher = (props) => {
  //
  const [search, setSearch] = useState('')
  const [getUserName, { isLoading }] = useGetUserNameMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

    // request / result / verify
    try {
      // get response
      const userResponse = await getUserName(user).unwrap()
      const { id: userId } = userResponse
      // console.log('userObj ->', userResponse)
      dispatch(githubActions.addUser(userResponse))
      onSuccessHandler(userId)
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

  // Success
  const onSuccessHandler = (userId) => {
    setSearch('')
    navigate(`/user/${userId}/`)
  }

  return (
    <div className={`${classes.searcher} ${'centered'}`}>
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
      {isLoading && <Loading />}
    </div>
  )
}

export default Searcher
