// import {Component} from 'react'
import '../style/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

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
        <span>{props.total} <Calendar /> days</span>
      </div>
      <div className='powder-days'>
        <span>{props.powder} <SnowFlake /> days</span>
      </div>
      <div className='backcountry-days'>
        <span>{props.backcountry} <Terrain /> hiking day</span>
      </div>
      <div className='goal'>
        <span>{calcGoalProgress(props.total, props.goal)}</span>
      </div>
    </div>
  )
}
