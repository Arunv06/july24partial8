import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/'>Home</Link>
            <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
          <Link to="/" className="navbar-link">About</Link>
          <Link to="/" className="navbar-link">Contact</Link>
          <Link to="/" className="navbar-link">Call us</Link>
            </div>
        </div>
    
        
    </nav>
  )
}

export default Navbar