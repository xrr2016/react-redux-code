// const React = window.React
// const ReactDOM = window.ReactDOM
// const { createElement } = window.React
// const { render } = window.ReactDOM
import React from 'react'
import { render } from 'react-dom'
import { Hello, Goodbye } from './lib'

// const style = {
//   backgroundColor: 'orange',
//   color: 'white',
//   fontFamily: 'verdana'
// }

// const title = createElement(
//   'h1',
//   {className: 'header', id: 'title', style: style},
//   'Hello React!'
// )

render(
  <div>
    {Hello}
    {Goodbye}
  </div>,
  document.getElementById('container')
)
