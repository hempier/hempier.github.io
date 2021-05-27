import React, { useRef, useEffect } from "react"
import Slider from "react-slick"
import ArrowPrev from "../../images/slider/arrow-prev.svg"
import ArrowNext from "../../images/slider/arrow-next.svg"

import "./vendor/slick-theme.scss"
import "./vendor/slick.scss"
import "./slider.scss"

const SimpleSlider = ({ children, customSettings = {} }) => {
  let slider = React.useRef(null)

  useEffect(() => {
    // console.log(slider.current)
  }, [slider])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...customSettings,
  }

  const renderArrows = ({ slider }) => {
    return (
      <div className="slider-arrow">
        <div
          className="slider-arrow__prev"
          onClick={() => slider.current.slickPrev()}
        >
          <ArrowPrev className="slider-arrow__prev" />
        </div>
        <div
          className="slider-arrow__next"
          onClick={() => slider.current.slickNext()}
        >
          <ArrowNext className="slider-arrow__next" />
        </div>
      </div>
    )
  }

  return (
    <>
      {renderArrows({ slider })}
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
    </>
  )
}

export default SimpleSlider
