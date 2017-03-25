import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <div>Home</div>
  },
  {},
  {}
]
