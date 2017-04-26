import React, { Component } from 'react'

class AppleItem extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.state != this.props.state
  }

  render () {
    let { state, actions } = this.props

    let mockState = {
      id: 1,
      weight: 256,
      isEaten: false
    }

    let mockActions = {
      eatApple: id => console.log('eatApple', id)
    }
    // state = mockState; actions = mockActions
    // if (state.isEaten) return null

    return (
      <div className='apple-item'>
        <div className='apple'>
          <img src='../images/apple.png' alt='apple' />
        </div>
        <section className='info'>
          <p className='name'>
            红苹果 - {state.id}号
          </p>
          <p className='weight'>
            {state.weight}克
          </p>
        </section>
        <div className='btn-div'>
          <button onClick={() => actions.eatApple(state.id) }>
            吃掉
          </button>
        </div>
      </div>
    )
  }
}

export default AppleItem
