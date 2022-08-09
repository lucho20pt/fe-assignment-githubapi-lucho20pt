import React from 'react'
import Searcher from 'features/github/Searcher'

const Search = () => {
  return (
    <section className="content">
      <h1 className="title text-center">Search</h1>
      <h2 className="text-center">Type the username on the search field and do your search</h2>
      <Searcher />
    </section>
  )
}

export default Search
