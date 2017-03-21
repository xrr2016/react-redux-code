import { createClass } from 'react'
import { SkiDayList } from './ski_day_list'
import { SkiDayCount } from './ski_day_count'

export const App = createClass({
  getInitialState () {
    return {
      allSkiDays: [
        {
          resort: 'Squaw Valley',
          date: new Date('2017/03/21'),
          powder: true,
          backcountry: false
        },
        {
          resort: 'Kirkwood',
          date: new Date('2017/04/09'),
          powder: false,
          backcountry: false
        },
        {
          resort: 'Mt. Tallac',
          date: new Date('2017/07/11'),
          powder: true,
          backcountry: true
        }
      ]
    }
  },
  countDays (filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter(day => (filter) ? day[filter] : day).length
  },
  render () {
    return (
      <div className='app'>
        <SkiDayList days={this.state.allSkiDays} />
        <SkiDayCount total={this.countDays()} powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} />
      </div>
    )
  }
})