import * as React from "react"
import styled from "@emotion/styled"

import "./feedback-form.scss"

const FeedbackForm = props => {
  const {
    image,
    title,
    subtitle,
    nameFieldLable,
    phoneFieldLable,
    emailFieldLable,
    commentsFieldLable,
    ctaText,
  } = props

  const FeedbackFromBackground = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-clip: content-box;
    background-size: cover;
    background-image: url(${image.file.url});
  `

  return (
    <FeedbackFromBackground className="feedback-form">
      <div className="container">
        <div className="feedback-form__inner-wrap">
          <h2 className="feedback-form__title">{title}</h2>
          <p className="feedback-form__subtitle">{subtitle}</p>
          <form action="" className="feedback-form__form form-body" id="feedback-form">
            <div className="feedback-form__fieldset form-fieldset">
              <label htmlFor="name" className="feedback-form__label form-label">
                {nameFieldLable}
              </label>
              <input
                type="text"
                id="name"
                className="feedback-form__input form-input"
              />
            </div>
            <div className="feedback-form__fieldset form-fieldset">
              <label
                htmlFor="phone"
                className="feedback-form__label form-label"
              >
                {phoneFieldLable}
              </label>
              <input
                type="text"
                id="phone"
                className="feedback-form__input form-input"
              />
            </div>
            <div className="feedback-form__fieldset form-fieldset">
              <label
                htmlFor="email"
                className="feedback-form__label form-label"
              >
                {emailFieldLable}
              </label>
              <input
                type="text"
                id="email"
                className="feedback-form__input form-input"
              />
            </div>
            <div className="feedback-form__fieldset form-fieldset">
              <label
                htmlFor="email"
                className="feedback-form__label form-label"
              >
                {emailFieldLable}
              </label>
              <input
                type="text"
                id="email"
                className="feedback-form__input form-input"
              />
            </div>
            <div className="feedback-form__fieldset form-fieldset">
              <label
                htmlFor="comment"
                className="feedback-form__label form-label"
              >
                {commentsFieldLable}
              </label>
              <input
                type="text"
                id="comment"
                className="feedback-form__input form-input"
              />
            </div>
            <button type="submit" className="feedback-form__submit cta-link">
              {ctaText}
            </button>
          </form>
        </div>
      </div>
    </FeedbackFromBackground>
  )
}

export default FeedbackForm
