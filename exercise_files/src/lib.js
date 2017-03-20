import React from 'react'
import titles from './titles.json'

export const Hello = (
  <h1 id='title' className='header' style={{backgroundColor: 'purple', color: 'yellow'}}>
    {titles.Hello}
  </h1>
)

export const Goodbye = (
  <h1 id='title' className='header' style={{backgroundColor: 'yellow', color: 'purple'}}>
    {titles.Goodbye}
  </h1>
)
