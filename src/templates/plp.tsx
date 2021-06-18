import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import ProductsList from "../components/products-list/products-list"
import Advertisement from "../components/advertisement/advertisement"
import FeedbackForm from "../components/feedback-form/feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page, allLocales, currentLocale } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  // const localizedPage = page

  const plpPageTopBanner = findByInternalName(
    page,
    ComponentInternalName.PlpTopBanner
  )
  const productsList = findByInternalName(
    page,
    ComponentInternalName.ProductsList
  )
  const plpInformationAdv = findByInternalName(
    page,
    ComponentInternalName.PlpInformationAdvertisement
  )
  const plpFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...plpPageTopBanner} />
      <ProductsList component={productsList} currentLocale={page.node_locale} listingPage={page.slug} />
      <Advertisement {...plpInformationAdv} />
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
