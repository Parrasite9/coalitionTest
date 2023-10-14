import React from 'react'
import '../CSS/MiddleNav.css'

function MiddleNav() {
  return (
    <div className='middleNav'>
      <div className="logo__section">
        <img src="images/logo1.png" alt="logo" />
        <h3>LosAngeles</h3>
        <h3>Mountains</h3>
      </div>

      <div className="middleNav__navlinks">
        <div className="navlinks"><a href="#">01. History</a> </div>
        <div className="navlinks"><a href="#">02. Team</a> </div>
      </div>
    </div>
  )
}

export default MiddleNav
