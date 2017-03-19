// const React = window.React
// const ReactDOM = window.ReactDOM
const { createElement } = window.React
const { render } = window.ReactDOM

const title = createElement(
  'h1',
  {className: 'header', id: 'title'},
  'Hello React!'
)

render(
  title,
  document.getElementById('container')
)
