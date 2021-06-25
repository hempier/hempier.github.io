import * as React from "react"
import IconLocation from "../../images/contact-address/icon-location.svg"
import IconTelephone from "../../images/contact-address/icon-telephone.svg"
import IconEmail from "../../images/contact-address/icon-mail.svg"

import "./contact-address.scss"

const  ContactAddress = ({
    title,
    firmName,
    addressLabel,
    addressValue,
    regonLabel,
    regonValue,
    vatLabel,
    vatValue,
    phoneLabel,
    phoneValue,
    emailTitle,
    email}) => {
    return (
        <section className="contact-address col-xs-12 col-lg-6">
            <h2 className="contact-address__heading">{title}</h2>
            <div className="contact-address__address">
                <IconLocation className="contact-address__icon contact-address__icon_address"/>
                <div className="contact-address__fieldset">
                    <strong>{firmName}</strong>
                </div>
                <div className="contact-address__fieldset">
                    <strong className="contact-address__label">{addressLabel}</strong>
                    <span className="contact-address__value">{addressValue}</span>
                </div>
                <div className="contact-address__fieldset">
                    <strong className="contact-address__label">{regonLabel}</strong>
                    <span className="contact-address__value">{regonValue}</span>
                </div>
                <div className="contact-address__fieldset">
                    <strong className="contact-address__label">{vatLabel}</strong>
                    <span className="contact-address__value">{vatValue}</span>
                </div>
            </div>
            <div className="contact-address__phone">
                <IconTelephone className="contact-address__icon contact-address__icon_phone"/>

                <div className="contact-address__fieldset">
                    <strong className="contact-address__label">{phoneLabel}</strong>
                    <span className="contact-address__value">{phoneValue}</span>
                </div>
            </div>
            <h5>{emailTitle}</h5>
            <div className="contact-address__email">
                <IconEmail className="contact-address__icon contact-address__icon_email"/>
                {email}
            </div>
        </section>
    )
}

export default ContactAddress