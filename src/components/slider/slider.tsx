import * as React from "react"
import Slider from "react-slick"

import "./vendor/slick-theme.scss"
import "./vendor/slick.scss"
import "./slider.scss"


const SimpleSlider = ({children, customSettings = {}}) => {
  // console.log(customSettings)
  let slider = React.useRef(null)
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'row',
    ...customSettings
  }

  const renderArrows = ({slider}) => {
    return (
      <div className="slider-arrow">
        <div
          className="arrow-btn prev"
          onClick={() =>slider.slickPrev()}
        >
          <span>{'<--'}</span>
        </div>
        <div
          className="arrow-btn next"
          onClick={() => slider.slickNext()}
        >
          <span>{'-->'}</span>
        </div>
      </div>
    );
  };

  return (
      <>
        <Slider ref={slider} {...settings}>
          {children}
        </Slider>
        {renderArrows({ 
          slider: slider.current 
        })}
      </>
  )
}

export default SimpleSlider