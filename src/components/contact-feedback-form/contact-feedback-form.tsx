import * as React from "react"

import "./contact-feedback-form.scss"

const ContactFeedbackForm = props => {
  const {
    title,
    subtitle,
    nameFieldLable,
    phoneFieldLable,
    emailFieldLable,
    commentsFieldLable,
    ctaText,
  } = props

  return (
    <section className="feedback-form">
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
            <div className="feedback-form__fieldset-wrap">
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
            </div>
            <button type="submit" className="feedback-form__submit cta-link">
              {ctaText}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactFeedbackForm
