import * as React from "react"
import axios from "axios";


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
    <section className="feedback-form-contact col-xs-12 col-lg-6">
      <div className="feedback-form-contact__inner-wrap">
        <h2 className="feedback-form-contact__title">{title}</h2>
        <p className="feedback-form-contact__subtitle">{subtitle}</p>
        <form onSubmit={handleOnSubmit} className="feedback-form-contact__form form-body" id="feedback-form-contact">
          <div className="feedback-form-contact__fieldset form-fieldset">
            <label htmlFor="name" className="feedback-form-contact__label form-label">
              {nameFieldLable}
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="feedback-form-contact__input form-input"
            />
          </div>
          <div className="feedback-form-contact__fieldset-wrap">
            <div className="feedback-form-contact__fieldset form-fieldset">
              <label
                htmlFor="phone"
                className="feedback-form-contact__label form-label"
              >
                {phoneFieldLable}
              </label>
              <input
                required
                type="text"
                id="phone"
                name="phone"
                className="feedback-form-contact__input form-input"
              />
            </div>
            <div className="feedback-form-contact__fieldset form-fieldset">
              <label
                htmlFor="email"
                className="feedback-form-contact__label form-label"
              >
                {emailFieldLable}
              </label>
              <input
                required
                type="text"
                id="email"
                name="email"
                className="feedback-form-contact__input form-input"
              />
            </div>
          </div>
          <div className="feedback-form-contact__fieldset form-fieldset">
            <label
              htmlFor="comment"
              className="feedback-form-contact__label form-label"
            >
              {commentsFieldLable}
            </label>
            <input
              type="text"
              id="comment"
              name="comment"
              className="feedback-form-contact__input form-input"
            />
          </div>
          <button type="submit" className="feedback-form-contact__submit cta-link">
            {ctaText}
          </button>
        </form>
      </div>

    </section>
  )
}

export default ContactFeedbackForm
