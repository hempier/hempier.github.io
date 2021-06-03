import React, { useState, useRef, useEffect } from "react"
import Slider from "react-slick"
import ArrowPrev from "../../images/slider/arrow-prev.svg"
import ArrowNext from "../../images/slider/arrow-next.svg"

import "./vendor/slick-theme.scss"
import "./vendor/slick.scss"
import "./gallery.scss"

const SimpleGallery = ({ children }) => {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  const [slider1, setSlider1] = React.useState(null);
  const [slider2, setSlider2] = React.useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  })

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.gallery-nav',
    className: 'gallery',
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.gallery-for',
    className: 'gallery-thumbs',
    dots: false,
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    // centerPadding: '10px',
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowPrev
        className='gallery__arrow gallery__arrow_prev'
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowNext
        className="gallery__arrow gallery__arrow_next"
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="gallery-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}>
            {children}
        </Slider>
      </div>
      <div className="thumbnail-gallery-wrap">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}>
            {children}
        </Slider>
      </div>
    </>
  )
}

export default SimpleGallery
