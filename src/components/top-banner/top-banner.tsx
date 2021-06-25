import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import "./top-banner.scss"



const TopBanner = (props) => {
  const { heading, description, image } = props

  const TopBannerBackground = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${image?.file.url || []});
  `
  return (
    <TopBannerBackground className="top-banner">
      <div className="top-banner__inner-wrap container">
        <h1 className="top-banner__title col-xs">{heading}</h1>
        {Boolean(description?.childMarkdownRemark) &&
          <p className="top-banner__description col-xs">
            {description.childMarkdownRemark.rawMarkdownBody}
          </p>
        }
      </div>
    </TopBannerBackground>
  )
}

export default TopBanner
