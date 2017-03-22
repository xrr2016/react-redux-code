import React from 'react'
import { render } from 'react-dom'
// import BasicExample from './components/basic_example'
// import ParamsExample from './components/params_example'
import AuthExample from './components/auth_example'

render(
  <AuthExample username={111} />,
  document.getElementById('root')
)
