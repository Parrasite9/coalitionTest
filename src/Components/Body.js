import React from 'react'
import '../CSS/Body.css'

function Body() {
  return (
    <div className='body'>
      <img className="body__background-image" src="images/center.png" alt="body_img" />
      <div className="body__Text"> {/* Content */}
        <h1>.01</h1>
        <h2>History</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat! Ipsum corporis, 
            tempore nulla labore distinctio aliquam, numquam magnam iste voluptatem reprehenderit inventore 
            modi quia cupiditate totam itaque tempora nihil.</p>
      </div>
    </div>
  )
}

export default Body
