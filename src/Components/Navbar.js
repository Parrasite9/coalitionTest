import React from 'react'
import '../CSS/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="/images/Logo1.png" alt="logo" />
      </div>

      <div className="navlink__section">
        <div className="navlink"><a href="#">01. HISTORY</a> </div>
        <div className="navlink"><a href="#"> 02. TEAM</a></div>
      </div>
    </div>
  )
}

export default Navbar
