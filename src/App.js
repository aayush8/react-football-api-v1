import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import League from './pages/league'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/league/:id' component={League} />
    </Router>
  )
}

export default () => <App />
