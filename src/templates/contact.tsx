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
      <ContactAddress {...contactAddress} />
      <ContactFeedbackForm {...contactFeedbackForm} />
    </Layout>
  )
}
