import React from 'react'

const Search = (props) => { // sending props
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => props.handleChange(event.target.value)} // sending props from search event 
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
