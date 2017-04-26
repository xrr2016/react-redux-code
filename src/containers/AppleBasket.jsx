import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppleBasket extends Component {
  render () {
    return (
      <div className="apple-basket">
        <h1 className="title">苹果篮子</h1>

        <div className="stats">
          <section className="section">
            <div className="head">当前</div>
            <div className="content">0个苹果, 0克</div>
          </section>
          <section className="section">
            <div className="head">已吃掉</div>
            <div className="content">2个苹果, 480克</div>
          </section>
        </div>

        <ul className="apple-list">
          <li className="empty-tip">篮子空空如也...</li>
        </ul>

        <div className="btn-div">
          <button>摘苹果</button>
        </div>
      </div>
    )
  }
}

export default connect()(AppleBasket)