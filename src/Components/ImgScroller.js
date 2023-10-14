import React, { Component } from "react";
import Slider from "react-slick";
import '../CSS/Slider.css'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
    };
    return (
      <div className="slider__container">
        <Slider {...settings}>
          <div className='slider__slide'>
            <h3>1</h3>
          </div>
          <div className='slider__slide'>
            <h3>2</h3>
          </div>
          <div className='slider__slide'>
            <h3>3</h3>
          </div>
          <div className='slider__slide'>
            <h3>4</h3>
          </div>
          <div className='slider__slide'>
            <h3>5</h3>
          </div>
          <div className='slider__slide'>
            <h3>6</h3>
          </div>
          <div className='slider__slide'>
            <h3>7</h3>
          </div>
          <div className='slider__slide'>
            <h3>8</h3>
          </div>
          <div className='slider__slide'>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}