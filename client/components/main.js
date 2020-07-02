import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userLogin, setUserLogin] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${userLogin}`)
    }
  }
  return (
    <div className="h-screen bg-purple-400 ">
      <div className="main-bg flex justify-center items-center h-full">
        <div className="bg-gray-700 bg-opacity-50 py-16 px-24 rounded-md m-auto">
          <img
            className="mx-auto h-12 w-auto"
            src="https://image.flaticon.com/icons/svg/25/25231.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 mb-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            {' '}
            Users repository search
          </h2>
          <form className="mx-auto">
            <input
              type="text"
              onChange={(e) => setUserLogin(e.target.value)}
              value={userLogin}
              onKeyDown={handleSearch}
              className="bg-white-700 mr-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:bg-gray-100"
            />
            <button
              type="button"
              onClick={() => history.push(`/${userLogin}`)}
              className="bg-red-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded"
            >
              Search{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
