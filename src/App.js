import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/home'
import Epl from './epl'
import Laliga from './laliga'
import Seriea from './seriea'
import Bundesliga from './bundesliga'
import Ligue1 from './ligue1'
import Brazila from './brazila'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/epl' component={Epl} />
      <Route path='/laliga' component={Laliga} />
      <Route path='/seriea' component={Seriea} />
      <Route path='/bundesliga' component={Bundesliga} />
      <Route path='/ligue1' component={Ligue1} />
      <Route path='/brazila' component={Brazila} />
    </Router>
  )
}

export default () => <App />
