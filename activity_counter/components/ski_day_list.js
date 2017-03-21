// import Terrain from 'react-icons/lib/md/terrain'
// import Snow from 'react-icons/lib/ti/weather-snow'
// import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './ski_day_row'

export const SkiDayList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Resort</th>
          <th>Powder</th>
          <th>Backcountry</th>
        </tr>
      </thead>
      <tbody>
        {props.days.map((day, index) => <SkiDayRow key={index} {...day} />)}
      </tbody>
    </table>
  )
}
