import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/products',
    sidebar: () => <div>Products</div>,
    main: () => <h2>Products</h2>
  },
  {
    path: '/service',
    sidebar: () => <div>Service</div>,
    main: () => <h2>Service</h2>
  }
]
const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#ddd'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0
        }}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/service'>Service</Link></li>
        </ul>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} conponent={route.sidebar} />
        ))}
      </div>
      <div style={{flex: 1, padding: '10px'}}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample
