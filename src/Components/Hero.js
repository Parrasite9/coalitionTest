import React from 'react';
import '../CSS/Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <img className='background-image' src="/images/hero1.png" alt="Hero_Img" />
      <img className="overlay" src='/images/hero2.png' alt='Hero_img'/>
      <div className="hero__Text"> {/* Content */}
        <h1><span className='hero__Text1'>LosAngeles</span></h1>
        <h1><span className='hero__Text2'>Mountains</span></h1>
      </div>
    </div>
  );
}

export default Hero;
