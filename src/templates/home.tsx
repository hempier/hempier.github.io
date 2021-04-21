import React from "react"
import HeroSlider from "../components/hero-slider/hero-slider"
// import Categories from '../components/Categories'
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import {findByInternalName, ComponentInternalName} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({pageContext: {page}}) => {
  const localizedPage = filterPageLocale(page, locale);
  const heroSliderItems = findByInternalName(localizedPage, ComponentInternalName.HeroSlider)?.content || []

  return (
    <Layout>
      <HeroSlider items={heroSliderItems}/>
      <div>{page.title}</div>
    </Layout>
  )
}
