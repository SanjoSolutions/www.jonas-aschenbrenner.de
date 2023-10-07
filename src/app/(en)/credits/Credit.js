"use client"

import { useTranslations } from "@/useTranslations.js"
import { useCallback, useState } from "react"

export function Credit({ name, author, url, license, info, licenseUrl }) {
  const [isLicenseShown, setIsLicenseShown] = useState(false)
  const [isInfoShown, setIsInfoShown] = useState(false)

  const translations = useTranslations("Credit")

  const onClickShowLicense = useCallback(
    function onClickShowLicense(event) {
      event.preventDefault()
      setIsLicenseShown(!isLicenseShown)
    },
    [isLicenseShown],
  )

  const onClickToggleShowInfo = useCallback(
    function onClickToggleShowInfo(event) {
      event.preventDefault()
      setIsInfoShown(!isInfoShown)
    },
    [isInfoShown],
  )

  return (
    <div className="credit rounded bg-secondary-subtle">
      <div className="credit__header">
        <div className="credit__head-line">
            <span className="credit__name">{ name }</span
            >
          { author && <>
            <span className="credit__by"> { translations.by } </span>
            <span className="credit__author">{ author }</span>
          </> }
        </div>
        <div className="credit__links">
          <a
            className="credit__toggle-show-license"
            href={ licenseUrl || "#" }
            target={ licenseUrl && "_blank" }
            onClick={ !licenseUrl ? onClickShowLicense : null }
          >{ isLicenseShown ?
            translations.hideLicense :
            translations.showLicense }
          </a
          >
          { info &&
            <a
              className="credit__toggle-show-info"
              href="#"
              onClick={ onClickToggleShowInfo }
            >{ isInfoShown ? translations.hideInfo : translations.showInfo }
            </a
            > }
          <a
            className="credit__url"
            href={ url }
            target="_blank"
          >{ translations.website }</a>
        </div>
      </div>
      { license &&
        <div
          className="credit__license"
          style={ { display: isLicenseShown ? "block" : "none" } }
        >{ license.trim() }</div> }
      { info &&
        <div
          className="credit__info"
          style={ { display: isInfoShown ? "block" : "none" } }
        >{ info.trim() }</div> }
    </div>
  )
}
