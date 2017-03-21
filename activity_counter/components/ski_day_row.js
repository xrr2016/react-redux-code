import Terrain from 'react-icons/lib/md/terrain'
import Snow from 'react-icons/lib/ti/weather-snow'
// import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = (props) => (
  <tr>
    <td>{props.date.getMonth() + 1}/{props.date.getDate()}/{props.date.getFullYear()}</td>
    <td>{props.resort}</td>
    <td>{props.powder ? <Snow /> : null }</td>
    <td>{props.backcountry ? <Terrain /> : null}</td>
  </tr>
)
