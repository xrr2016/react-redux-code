// import {Component} from 'react'
import '../style/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

function percentToDecimal (decimal) {
  return ((decimal * 100).toFixed(2) + '%')
}

function calcGoalProgress (total, goal) {
  return percentToDecimal(total / goal)
}
// const defaultProps = {
//   total: 80,
//   powder: 30,
//   backcountry: 10,
//   goal: 100
// }
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

SkiDayCount.defaultProps = {
  total: 100,
  powder: 20,
  goal: 120,
  backcountry: 10
}

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  goal: PropTypes.number,
  backcountry: PropTypes.number
}
