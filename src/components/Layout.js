"use client"

import "./Layout.css"
import { ExternalNavLink } from "@/components/ExternalNavLink.js"
import { FooterNavigationItem } from "@/components/FooterNavigationItem.js"
import { NavigationItem } from "@/components/NavigationItem.js"
import { retrievePathToOtherLanguage } from "@/pages.js"
import { useLanguage } from "@/useLanguage.js"
import { usePathForPageId } from "@/usePathForPageId.js"
import { useTranslations } from "@/useTranslations.js"
import Image from "next/image.js"
import Link from "next/link.js"
import { usePathname } from "next/navigation.js"

export function Layout({ children }) {
  const pathname = usePathname()

  const pathToOtherLanguage = retrievePathToOtherLanguage(pathname)

  const translations = useTranslations("layout")
  const language = useLanguage()

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href={usePathForPageId("homepage")}>
            Sanjo Solutions
          </a>
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
            <ul className="languages navbar-nav flex-row ms-auto mb-2 mb-lg-0">
              <li>
                {language === "en" ? (
                  <Image
                    src="images/flags/usa.svg"
                    width="24"
                    height="24"
                    alt="English"
                  />
                ) : (
                  <Link
                    href={retrievePathToOtherLanguage(pathname)}
                    title={translations.switchLanguage}
                  >
                    <Image
                      src="images/flags/usa.svg"
                      width="24"
                      height="24"
                      alt="English"
                    />
                  </Link>
                )}
              </li>
              <li className="ms-2">
                {language === "de" ? (
                  <Image
                    src="images/flags/de.svg"
                    width="24"
                    height="24"
                    alt="Deutsch"
                  />
                ) : (
                  <Link
                    href={retrievePathToOtherLanguage(pathname)}
                    title={translations.switchLanguage}
                  >
                    <Image
                      src="images/flags/de.svg"
                      width="24"
                      height="24"
                      alt="Deutsch"
                    />
                  </Link>
                )}
              </li>
            </ul>
            <ul className="navbar-nav ms-lg-3 mb-2 mb-lg-0">
              {process.env.NEXT_PUBLIC_FEATURE_PAGE_BUILDER && (
                <li className="nav-item">
                  <NavigationItem pageId="page-builder">
                    {translations.pageBuilder}
                  </NavigationItem>
                </li>
              )}
              <li className="nav-item">
                <NavigationItem pageId="about">
                  {translations.about}
                </NavigationItem>
              </li>
              <li className="nav-item">
                <NavigationItem pageId="contact">
                  {translations.contact}
                </NavigationItem>
              </li>
              <li className="nav-item">
                <NavigationItem pageId="articles">
                  {translations.articles}
                </NavigationItem>
              </li>
              <li className="nav-item">
                <ExternalNavLink href="https://github.com/Sanjo-Solutions">
                  {translations.gitHub}
                </ExternalNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-shrink-0">
        <div className="container">{children}</div>
      </main>

      <footer className="footer mt-auto py-3 mt-0 bg-light">
        <div className="container">
          <div className="row">
            <div className="footer-link-list-col col text-end">
              <ol className="footer-link-list list-inline mb-0">
                {pathToOtherLanguage && (
                  <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                    <Link
                      href={retrievePathToOtherLanguage(pathname)}
                      title={translations.switchLanguage}
                    >
                      {translations.switchLanguage}
                    </Link>
                  </li>
                )}
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                  <FooterNavigationItem pageId="imprint">
                    {translations.imprint}
                  </FooterNavigationItem>
                </li>
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                  <FooterNavigationItem pageId="privacy-policy">
                    {translations.privacyPolicy}
                  </FooterNavigationItem>
                </li>
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0 me-md-3">
                  <FooterNavigationItem pageId="credits">
                    {translations.credits}
                  </FooterNavigationItem>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
