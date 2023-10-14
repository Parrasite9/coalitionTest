import React from 'react'
import '../CSS/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo__container">
        <div className="logo">
          <img src="/images/Logo1.png" alt="logo" />
        </div>
      </div>

      <div className="navlink__section">
        <a className="navlink" href="#">01. HISTORY</a>
        <a className="navlink" href="#"> 02. TEAM</a>
      </div>

    </div>
  )
}

export default Navbar
