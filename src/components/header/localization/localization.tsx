import * as React from "react"
import { Link } from "gatsby"

import "./localization.scss"

const Localization = ({ allLocales }) => {
  const localeMap = {
    "uk-UA": "Укр",
    "ru-RU": "Рус",
  }
  
  const isCurrentActiveLocalization = ({ isCurrent }) =>
    isCurrent
      ? { className: "header__locale-item header__locale-item_active" }
      : null

  return (
    <div className="header__locale">
      {allLocales
        ? allLocales.map(link => {
            return (
              <Link
                to={link.pathname}
                key={link.name}
                className="header__locale-item"
                getProps={isCurrentActiveLocalization}
              >
                {localeMap[link.name]}
              </Link>
            )
          })
        : null}
    </div>
  )
}

export default Localization
