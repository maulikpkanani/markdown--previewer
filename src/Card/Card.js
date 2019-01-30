import React from 'react'
import './Card.css'

const Card = ({ children, title }) => (
  <div className='card'>
    <div className='card-header'>
      <span className='card-header-title'>{title}</span>

      <div className='card-header-circles'>
        <span className='circle-1' />
        <span className='circle-2' />
        <span className='circle-3' />
      </div>
    </div>
    <div className='card-content'>{children}</div>
  </div>
)

export default Card
