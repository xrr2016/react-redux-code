import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => {
  return (<h1>Home</h1>)
}
const About = () => {
  return (<h1>About</h1>)
}
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>props vs state</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (<h3>Please select a topic.</h3>)} />
  </div>
)
const Topic = ({ match }) => (
  <div><h3>{match.params.topicId}</h3></div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
)

render(
  <BasicExample />,
  document.getElementById('root')
)
