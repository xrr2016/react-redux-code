import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'

const PreExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>From</Link></li>
        <li><Link to='/one'>One</Link></li>
        <li><Link to='/two'>Two</Link></li>
      </ul>
      <Route path='/' exact component={From} />
      <Route path='/one' render={() => <h3>One</h3>} />
      <Route path='/two' render={() => <h3>Two</h3>} />
    </div>
  </Router>
)

class From extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isBlocking: false
    }
  }
  render () {
    const { isBlocking } = this.state
    return (
      <from
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({
            isBlocking: false
          })
        }}>
        <Prompt when={isBlocking} message={location => (
        `Are you sure you want to go to ${location.pathname}`)} />
        <p>
        Blocking ? {isBlocking ? 'Yes. click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input size='50' placeholder='type something to block transitions'
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }} />
        </p>
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </from>)
  }
}

export default PreExample
