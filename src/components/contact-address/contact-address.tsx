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
        <section className="contact-address">
            {title}
            {firmName}
            {addressLabel}
            {addressValue}
            {regonLabel}
            {regonValue}
            {vatLabel}
            {vatValue}
            {phoneLabel}
            {phoneValue}
            {emailTitle}
            {email}
        </section>
    )
}

export default ContactAddress