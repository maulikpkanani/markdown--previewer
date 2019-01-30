import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <p>
      Created by:{' '}
      <a href='#' target='_blank' rel='name'>
        Maulik Kanani
      </a>{' '}
      <span>|</span>{' '}
      <a
        href='https://github.com/maulikpkanani/markdown--previewer'
        target='_blank'
        rel='repo-link'
      >
        Repo Link
      </a>
    </p>
  </footer>
)

export default Footer
