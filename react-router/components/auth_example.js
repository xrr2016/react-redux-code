import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to='/public'>Public Page</Link></li>
        <li><Link to='/prptected'>Protected Page</Link></li>
      </ul>
      <Route path='/public' component={Public} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/protected' component={Protected} />
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!
        <button onClick={() => { fakeAuth.signout(() => history.push('/')) }}>Sign out</button>
      </p>
    ) : (
      <p>You are not Logged in.</p>
    )
))

const PrivateRoute = ({component, ...rest}) => (
  <Route {...rest} render={props => {
    fakeAuth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />
    )
  }} />
)

const Public = () => <h2>Public</h2>
const Protected = () => <h2>Protected</h2>

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }

  login () {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render () {
    const { from } = this.props.location.state || {from: {pathname: '/'}}
    const { redirectToReferrer } = this.state
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <p>You must login to view the page at {from.pathname}</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired
}
export default AuthExample
