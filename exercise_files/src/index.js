// const React = window.React
// const ReactDOM = window.ReactDOM
// const { createElement } = window.React
const { render } = window.ReactDOM

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

// const title = createElement(
//   'h1',
//   {className: 'header', id: 'title', style: style},
//   'Hello React!'
// )

render(
  <h1 id='title' className='header' style={style} >Hello React!</h1>,
  document.getElementById('container')
)
