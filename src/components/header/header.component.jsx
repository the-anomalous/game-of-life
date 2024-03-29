import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="title">
        <h1>
          <span>John Conway's</span>
          Game Of Life
        </h1>
      </div>
      <div className="routes">
        <Link to='/' className="route home">Home</Link>
        <Link to='/rules' className="route rules">Rules</Link>
      </div>
    </div>
  )
}

export default Header
