import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/ski_day_count'
import './style/global.scss'

window.React = React

render(
  <SkiDayCount total={15} powder={10} backcountry={6} goal={120} />,
  document.getElementById('root')
)
