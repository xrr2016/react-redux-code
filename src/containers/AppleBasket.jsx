import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppleItem from '../components/AppleItem'

class AppleBasket extends Component {
  render () {
    let { state } = this.props
    let mockState = {
      isPicking: false,
      newAppleId: 3,
      apples: [
        {
          id: 1,
          weight: 235,
          isEaten: true
        },
        {
          id: 2,
          weight: 256,
          isEaten: false
        }
      ]
    }

    state = mockState
    let stats = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    }

    state.apples.map(apple => {
      let selector = apple.isEaten ? 'appleEaten' : 'appleNow'
      stats[selector].quantity++
      stats[selector].weight += apple.weight
    })

    return (
      <div className='apple-basket'>
        <h1 className='title'>苹果篮子</h1>
        <div className='stats'>
          <section className='section'>
            <div className='head'>
              当前
            </div>
            <div className='content'>
              {stats.appleNow.quantity}个苹果,
              {stats.appleNow.weight}克
            </div>
          </section>
          <section className='section'>
            <div className='head'>
              已吃掉
            </div>
            <div className='content'>
              {stats.appleEaten.quantity}个苹果，
              {stats.appleEaten.weight}克
            </div>
          </section>
        </div>
        <ul className='apple-list'>
          {state.apples.map(apple => <AppleItem key={apple.id} state={apple} />
           )}
        </ul>
        <div className='btn-div'>
          <button>
            摘苹果
          </button>
        </div>
      </div>
    )
  }
}

function select (state) {
  return {
    state: state.appleBasket
  }
}

export default connect()(AppleBasket)
