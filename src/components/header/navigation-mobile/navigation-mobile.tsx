import React from "react"
import { bool } from 'prop-types';
import styled from "@emotion/styled"
import { Link } from "gatsby"

import "./navigation-mobile.scss"
import { StyledNavigation } from './navigation.styled'
import Localization from "../localization/localization"

const NavigationMobile = ({ open, navigationItems, allLocales, currentLocale, logo }) => {
  const isPartiallyActiveNavigation = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent
      ? { className: "header-mobile__navigation-link header-mobile__navigation-link_active" }
      : null

  return (
    <StyledNavigation className="header-mobile__navigation" open={open} logo={logo}>
      <img src={logo.url} alt={logo.alt} className="header-mobile__logotype "/>
      <Localization allLocales={allLocales}/>
      {navigationItems.map((link, id) => (
          <>
            <Link
              to={`/${currentLocale}/${link.slug}`}
              key={id.toString()}
              className="header-mobile__navigation-link"
              getProps={link === "/" ? undefined : isPartiallyActiveNavigation}
            >
              {link.title}
            </Link>
          </>
        ))}
    </StyledNavigation>
  )
}


export default NavigationMobile
