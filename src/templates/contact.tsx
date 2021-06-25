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

export default ({ pageContext: { page, allLocales } }) => {
  // const localizedPage = page

  const contactTopBanner = findByInternalName(
    page,
    ComponentInternalName.ContactTopBanner
  )
  const contactAddress = findByInternalName(
    page,
    ComponentInternalName.ContactAddress
  )
  const contactFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.ContactFeedbackForm
  )

  return (
    <Layout allLocales={allLocales} currentLocale={page.node_locale}>
      <ContactTopBanner {...contactTopBanner} />
      <section className="contact container">
        <ContactAddress {...contactAddress} />
        <ContactFeedbackForm {...contactFeedbackForm} />
      </section>
    </Layout>
  )
}
