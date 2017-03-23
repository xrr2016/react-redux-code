import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink active to='/' label='Home' />
      <OldSchoolMenuLink to='/about' label='About' />
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>
)

const OldSchoolMenuLink = ({label, to, active}) => (
  <Route ptah={to} exact={active} children={({ match }) => (
    <div style={match ? {color: 'red'} : {}}>
      {match ? '>' : ''} <Link to={to}>{label}</Link>
    </div>
  )} />
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default CustomLinkExample
