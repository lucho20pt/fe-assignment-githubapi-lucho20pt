import classes from 'styles/github/Search.module.scss'

const Search = (props) => {
  return (
    <div className={`${classes.search} ${'centered'}`}>
      <h2 className="subtitle text-center">Start Searching for Github User</h2>
      <br />
      <div className="row">
        <input type="text" name="" id="" placeholder="Enter username..." />{' '}
        <button type="button" className="btn">
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
