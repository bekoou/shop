import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Logs from './logs'
import Head from './head'
import Main from './main'
import Header from './header'
import Readme from './basket'

const Home = () => {
  const [repositories, setNewRepos] = useState([])
  const [readme, setReadme] = useState('')
  const [find, setFind] = useState('')
  const { userName, userRepos } = useParams()
  useEffect(() => {
    axios(`http://api.github.com/users/${userName}/repos`).then(({ data }) => setNewRepos(data))
  }, [userName])
  useEffect(() => {
    const headers = { Accept: 'application/vnd.github.VERSION.raw' }
    if (userRepos !== undefined) {
      axios(
        `http://api.github.com/repos/${userName}/${userRepos}/readme`,
        { param: {} },
        headers
      ).then(({ data }) => setReadme(data))
    }
  }, [userName, userRepos])

  const handleFind = (search) => {
    setFind(search)
  }
  return (
    <div>
      <Head title="Hello" />
      <Header readme={readme} userRepos={userRepos} userName={userName} handleFind={handleFind} />
      <div className="h-screen mx-auto">
        <Route exact path="/" component={() => <Main />} />
        <Route
          exact
          path="/:userName"
          component={() => (
            <Logs userName={userName} repositories={repositories} find={find} />
          )}
        />
        <Route exact path="/:userName/:userRepos" component={() => <Readme readme={readme} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
