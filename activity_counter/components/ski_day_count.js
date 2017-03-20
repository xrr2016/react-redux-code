// import {Component} from 'react'
import '../style/ui.scss'

function percentToDecimal (decimal) {
  return ((decimal * 100) + '%')
}

function calcGoalProgress (total, goal) {
  return percentToDecimal(total / goal)
}
export const SkiDayCount = (props) => {
  return (
    <div className='ski-day-count'>
      <div className='total-days'>
        <span>{props.total} days</span>
      </div>
      <div className='powder-days'>
        <span>{props.powder} days</span>
      </div>
      <div className='backcountry-days'>
        <span>{props.backcountry} hiking day</span>
      </div>
      <div className='goal'>
        <span>{calcGoalProgress(props.total, props.goal)}</span>
      </div>
    </div>
  )
}
