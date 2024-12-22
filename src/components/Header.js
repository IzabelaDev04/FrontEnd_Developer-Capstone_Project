import React from 'react'
import logo from '../images/Logo .svg'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Nav/>
      </div>
    </header>
  )
}

export default Header
