import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    props.handleFind(search)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div>
        <NavLink to="/" className="text-white font-bold">
          Home
        </NavLink>
        {props.readme && (
          <NavLink to={`/${props.userName}`} className="text-white font-bold">
            Repositories
          </NavLink>
        )}
      </div>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        className="bg-white-700 mr-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:bg-gray-100"
      />
    </nav>
  )
}

export default React.memo(Header)
