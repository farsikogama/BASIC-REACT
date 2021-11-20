import React from 'react'
import { Link } from 'react-router-dom'

// components

// styling
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        {/* logo */}
        <div className='logo'>
          <p>Ini Navbar</p>
        </div>
        {/* menu */}
        <div className='menu'>
          <Link to='/'>
            <p>Home</p>
          </Link>
          <Link to='/about'>
            <p>About</p>
          </Link>
          <Link to='/rendering'>
            <p>Rendering</p>
          </Link>
          <Link to='/listrendering'>
            <p>List Render</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
