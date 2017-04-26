import React, { Component } from 'react'

class AppleItem extends Component {
  render () {
    return (
      <div className="apple-item">
        <div className="apple">
          <img src="../images/apple.png" alt="apple"/>
        </div>
        <section className="info">
          <p className="name">红苹果 - 1号</p>
          <p className="weight">265克</p>
        </section>
        <div className="btn-div">
          <button className>吃掉</button>
        </div>
      </div>
    )
  }
}

export default AppleItem