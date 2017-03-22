import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li><Link to='/google'>Google</Link></li>
        <li><Link to='/baidu'>Baidu</Link></li>
        <li><Link to='/bing'>Bing</Link></li>
        <li><Link to='/shougou'>Shougou</Link></li>
      </ul>
      <Route path='/:id' component={Child} />
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <h2>ID: {match.params.id}</h2>
  </div>
)

export default ParamsExample
