import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar container">
        <div>i<span>Employee</span></div>
        <Link to='/'>Home</Link>
        <Link to='/employee'>Employee</Link>
    </nav>
  )
}

export default Navbar
