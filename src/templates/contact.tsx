import React from "react"

import Layout from "../components/layout"
import ContactTopBanner from "../components/top-banner/top-banner"
import ContactAddress from "../components/contact-address/contact-address"
import ContactFeedbackForm from "../components/contact-feedback-form/contact-feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  const localizedPage = page

  const contactTopBanner = findByInternalName(
    localizedPage,
    ComponentInternalName.ContactTopBanner
  )
  const contactAddress = findByInternalName(
    localizedPage,
    ComponentInternalName.ContactAddress
  )
  const contactFeedbackForm = findByInternalName(
    localizedPage,
    ComponentInternalName.ContactFeedbackForm
  )

  return (
    <Layout>
      <ContactTopBanner {...contactTopBanner} />
      <section className="container">
        <div className="row">
          <div className="col-6">
            <ContactAddress {...contactAddress} />
          </div>
          <div className="col-6">
            <ContactFeedbackForm {...contactFeedbackForm} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
