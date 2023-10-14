// import React from 'react'
// import '../CSS/Hero.css'

// function Hero() {
//   return (
//     <div className='hero'>
//       <div className="hero__Text">
//         <h1><span className='hero__Text1'>LosAngeles</span></h1>
//         <h1><span className='hero__Text2'>Mountains</span></h1>
//       </div>

//       <div className="overlay"></div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import '../CSS/Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className="background-image"></div> {/* Original background image */}
      <div className="overlay"></div> {/* Overlay */}
      <div className="hero__Text"> {/* Content */}
        <h1><span className='hero__Text1'>LosAngeles</span></h1>
        <h1><span className='hero__Text2'>Mountains</span></h1>
      </div>
    </div>
  );
}

export default Hero;
