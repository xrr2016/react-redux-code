import React, { Component } from 'react'
import { BrowsercRouter as Router, Switch, Route, Link } from 'react-router-dom'

class ModalSwitch extends Component {
  constructor (props) {
    super(props)
    this.previousLocation = this.props.location
  }
  // previousLocation = this.props.location
  componentWillUpdate (nextProps) {
    const { location } = this.props
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location
    }
  }

  render () {
    const { location } = this.props
    const isModal = !!(
      location.state && location.state.modal && this.previousLocation !== location
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/img/:id' component={ImageView} />
        </Switch>>
        {isModal ? <Route path='/img/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const IMAGES = [
  {id: 0, title: '花青绿', color: '#00a381'},
  {id: 1, title: '青绿', color: '#00a497'},
  {id: 2, title: '桃色', color: '#f09199'},
  {id: 3, title: '空色', color: '#a0d8ef'},
  {id: 4, title: '薄篮', color: '#0094c8'}
]

const Thumbnail = ({ color }) =>
  <div style={{width: 50, height: 50, lineHeight: 50, fontSize: '12px', textAlign: 'center', backgroundColor: color}}>{color}</div>

const Image = ({ color }) =>
  <div style={{width: '100%', height: 400, lineHeight: 400, fontSize: '20px', textAlign: 'center', backgroundColor: color}}>{color}</div>

const Home = () => (
  <div>
    <Link to='/gallery'>查看相册</Link>
    <h2>Featured Image</h2>
    <ul>
      <li><Link to='/img/2'>桃色</Link></li>
      <li><Link to='/img/4'>薄篮</Link></li>
    </ul>
  </div>
)

const Gallery = () => (
  <div>
    {IMAGES.map(i => (
      <Link key={i.id} to={{pathname: `/img/${i.id}`, state: {modal: true}}}>
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const ImageView = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return <div>图片未找到!</div>
  }
  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div onClick={back} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      backgroundColor: 'rgba(0, 0, 0, .15)'
    }}>
      <div className='modal' style={{
        position: 'absolute',
        backgroundColor: '#fff',
        top: 25,
        left: '10%',
        right: '10%',
        padding: 15,
        border: '2px solid #444'
      }}>
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button onClick={back} type='button'>关闭</button>
      </div>
    </div>
  )
}

const ModalGallery = () => (
  <Router><Route component={ModalSwitch} /></Router>
)

export default ModalGallery
