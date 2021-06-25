import * as React from "react"

import "./product-tech-info.scss"

const ProductTechInfo = ({
  image,
  name,
  title,
  characteristics,
  documentationLinkText,
}) => {
  return (
    <section className="product-tech">
      <div className="product-tech__inner-wrap container">
        <div className="product-tech__image col-xs-12 col-lg-6">
          <img src={image.file.url} alt="" />
        </div>
        <div className="product-tech__content col-xs-12 col-lg-5 off-lg-1">
          <h2 className="product-tech__name subtitle-2">{name}</h2>
          <h2 className="product-tech__title">{title}</h2>
          <ul className="product-tech__info">
              {characteristics.map((item, id) => (
                <li className="product-tech__info-item" key={id.toString()}>
                  <strong className="product-tech__label">{item.techLabel}</strong>
                  <span className="product-tech__value">{item.techValue}</span>
                </li>
              )) }
          </ul>
          <a href="" className="product-tech__tech-documentation link">
            {documentationLinkText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductTechInfo
