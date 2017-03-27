import React from 'react'
import { render } from 'react-dom'
// import BasicExample from './components/basic_example'
// import ParamsExample from './components/params_example'
// import AuthExample from './components/auth_example'
// import CustomLinkExample from './components/custom_link'
// import PreExample from './components/prevent_transtion'
// import NotMatchExample from './components/not_match'
// import RecursiveExample from './components/recursive_path'
// import SidebarExample from './components/sidebar'
import { TransitionExample } from './components/transtion_example'

render(
  <TransitionExample />,
  document.getElementById('root')
)
