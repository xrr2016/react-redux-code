import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

const NoMatchExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/old-match'>Old Match, to be redirected</Link></li>
        <li><Link to='/will-match'>Will Match</Link></li>
        <li><Link to='/will-not-match'>Will Not Match</Link></li>
        <li><Link to='/also/will/not/match'>Also Will Not Match</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='/old-match' to='/will-match' />
        <Route path='/will-match' component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const Home = () => (
  <p>
    A <code>&lt;Switch&gt;</code> renders the first child <code>&lt;Route&gt;</code>That matchs . A<code>&lt;Route&gt;</code> with no <code>pach</code> always matchs
  </p>
)
const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{ location.pathname }</code></h3>
  </div>
)

export default NoMatchExample
