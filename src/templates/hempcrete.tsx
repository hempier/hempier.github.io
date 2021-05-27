import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import PageText from "../components/page-text/page-text"
import AdvantagesTrusted from "../components/advantages-trusted/advantages-trusted"
import AplicationAreas from "../components/aplication-areas/aplication-areas"
import FeedbackForm from "../components/feedback-form/feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page,allLocales } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  const localizedPage = page

  const hempcretePageTopBanner = findByInternalName(
    localizedPage,
    ComponentInternalName.HempcreteTopBanner
  )
  const hempcretePageText = findByInternalName(
    localizedPage,
    ComponentInternalName.HempcretePageText
  )
  const hempcreteAdvantagesTrusted = findByInternalName(
    localizedPage,
    ComponentInternalName.HempcreteAdvantagesTrusted
  )
  const hempcreteBenefitsTrusted = findByInternalName(
    localizedPage,
    ComponentInternalName.HempcreteBenefitsTrusted
  )
  const hempcreteAplicationAreas = findByInternalName(
    localizedPage,
    ComponentInternalName.HempcreteAplicationAreas
  )
  const feedbackForm = findByInternalName(
    localizedPage,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...hempcretePageTopBanner} />
      <PageText text={hempcretePageText} />
      <AplicationAreas items={hempcreteAplicationAreas} />
      <AdvantagesTrusted items={hempcreteAdvantagesTrusted}/>
      <AdvantagesTrusted items={hempcreteBenefitsTrusted}/>
      <FeedbackForm {...feedbackForm}/>
    </Layout>
  )
}
