import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{color: 'inhert'}} />
  </li>
)

const Hsl = ({match: {params}}) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  teaxtAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export const TransitionExample = () => (
  <Router>
    <Route render={({location}) => (
      <div style={styles.fill}>
        <Route exact path='/' render={() => <Redirect to='/10/90/50' />} />
        <ul style={styles.nav}>
          <NavLink to='/10/90/50'>Red</NavLink>
          <NavLink to='/120/110/40'>Green</NavLink>
          <NavLink to='/200/100/40'>Blue</NavLink>
          <NavLink to='/310/100/50'>Pink</NavLink>
        </ul>
        <div style={styles.content}>
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionLeaveTimeout={300}
            transitionEnterTimeout={300}
          >
            <Route location={location} key={location.key} path='/:h/:s/:l' component={Hsl} />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )} />
  </Router>
)
