import React from 'react'
import titles from './titles.json'
import './style/hello.css'
import './style/goodbye.scss'

export const Hello = (
  <h1 id='title' className='hello'>
    {titles.Hello}
  </h1>
)

export const Goodbye = (
  <h1 id='title' className='goodbye'>
    {titles.Goodbye}
  </h1>
)
