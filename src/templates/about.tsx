import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PartnersAboutUsSlider from "../components/partners-about-us-slider/partners-about-us-slider"
import TopPageBanner from "../components/top-banner/top-banner"
import PageText from "../components/page-text/page-text"
import AwardsTrusted from "../components/awards-trusted/awards-trusted"
import CarbonDioxidCounter from "../components/carbon-dioxid-counter/carbon-dioxid-counter"
import FeedbackForm from "../components/feedback-form/feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

// const PartnersAboutUsSliderSettings = {
//   responsive: [
//     {
//       breakpoint: 1140,
//       settings: {
//         slidesToShow: 1,
//       }
//     },
//   ]
// }

export default ({ pageContext: { page, allLocales } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  // const localizedPage = page

  const partnersAboutUsSlider = findByInternalName(
    page,
    ComponentInternalName.PartnersAboutUsSlider
  )
  const aboutPartnersAboutUsSlider = findByInternalName(
    page,
    ComponentInternalName.AboutPartnersAboutUsSlider
  )
  const aboutPageTopBanner = findByInternalName(
    page,
    ComponentInternalName.AboutPageTopBanner
  )
  const aboutPageAwards = findByInternalName(
    page,
    ComponentInternalName.AboutPageAwards
  )
  const aboutPageText = findByInternalName(
    page,
    ComponentInternalName.AboutPageText
  )
  const carbonDioxidCounter = findByInternalName(
    page,
    ComponentInternalName.CarbonDioxidCounter
  )
  const feedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...aboutPageTopBanner} />
      <PageText text={aboutPageText} />
      <AwardsTrusted items={aboutPageAwards}/>
      <PartnersAboutUsSlider component={aboutPartnersAboutUsSlider} />
      <CarbonDioxidCounter {...carbonDioxidCounter}/>
      <PartnersAboutUsSlider component={partnersAboutUsSlider} />
      <FeedbackForm {...feedbackForm}/>
    </Layout>
  )
}
