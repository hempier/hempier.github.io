import * as React from "react"
import styled from "@emotion/styled"
import axios from "axios";

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

  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/fd79ffaa-e0d5-42b2-b125-41458a780f9e",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <FeedbackFromBackground className="feedback-form">
      <div className="container">
        <div className="feedback-form__inner-wrap">
          <h2 className="feedback-form__title">{title}</h2>
          <p className="feedback-form__subtitle">{subtitle}</p>
          <form onSubmit={handleOnSubmit} className="feedback-form__form form-body" id="feedback-form">
            <div className="feedback-form__fieldset form-fieldset">
              <label htmlFor="name" className="feedback-form__label form-label">
                {nameFieldLable}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
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
                required
                type="phone"
                id="phone"
                name="phone"
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
                required
                type="email"
                id="email"
                name="email"
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
                name="comment"
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
