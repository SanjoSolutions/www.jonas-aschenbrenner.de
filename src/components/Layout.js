"use client"

import { ExternalNavLink } from "@/components/ExternalNavLink.js"
import { FooterNavigationItem } from "@/components/FooterNavigationItem.js"
import { NavigationItem } from "@/components/NavigationItem.js"
import { retrievePathToOtherLanguage } from "@/pages.js"
import { useTranslations } from "@/useTranslations.js"
import Link from "next/link.js"
import { usePathname } from "next/navigation.js"

export function Layout({ children }) {
  const pathname = usePathname()

  const pathToOtherLanguage = retrievePathToOtherLanguage(pathname)

  const translations = useTranslations("layout")

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Sanjo Solutions</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavigationItem pageId="about">{ translations.about }</NavigationItem>
              </li>
              <li className="nav-item">
                <NavigationItem pageId="services">{ translations.services }</NavigationItem>
              </li>
              <li className="nav-item">
                <NavigationItem pageId="contact">{ translations.contact }</NavigationItem>
              </li>
              <li className="nav-item">
                <ExternalNavLink href="https://github.com/SanjoSolutions/">{ translations.gitHub }</ExternalNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-shrink-0 py-3">
        <div className="container">
          { children }
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-auto text-center text-md-start made-with-love">
              <span className="text-muted">{ translations.madeWithLove }</span>
            </div>
            <div className="col-12 col-md text-end mt-4 mt-md-0">
              <ol className="footer-link-list list-inline mb-0">
                { pathToOtherLanguage &&
                  <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">

                    <Link
                      href={ retrievePathToOtherLanguage(pathname) }
                      title={ translations.switchLanguage }
                    >{ translations.switchLanguage }</Link>
                  </li> }
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                  <FooterNavigationItem pageId="imprint">{ translations.imprint }</FooterNavigationItem>
                </li>
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                  <FooterNavigationItem pageId="privacy-policy">{ translations.privacyPolicy }</FooterNavigationItem>
                </li>
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                  <FooterNavigationItem pageId="credits">{ translations.credits }</FooterNavigationItem>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
