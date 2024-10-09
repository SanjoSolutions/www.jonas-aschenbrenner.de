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
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href={usePathForPageId("homepage")}>
            Jonas Aschenbrenner
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavigationItem pageId="principles">
                  {translations.principles}
                </NavigationItem>
              </li>

              <li className="nav-item">
                <NavigationItem pageId="services">
                  {translations.services}
                </NavigationItem>
              </li>

              <li className="nav-item">
                <NavigationItem pageId="contact">
                  {translations.contact}
                </NavigationItem>
              </li>

              <li className="nav-item">
                <NavigationItem pageId="team">
                  {translations.team}
                </NavigationItem>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              {process.env.NEXT_PUBLIC_FEATURE_PAGE_BUILDER && (
                <li className="nav-item">
                  <NavigationItem pageId="page-builder">
                    {translations.pageBuilder}
                  </NavigationItem>
                </li>
              )}

              <li className="nav-item">
                <NavigationItem pageId="articles">
                  {translations.articles}
                </NavigationItem>
              </li>
            </ul>

            <ul className="languages navbar-nav ms-lg-3 flex-row">
              {language !== "en" && (
                <li>
                  <Link
                    href={retrievePathToOtherLanguage(pathname) ?? ""}
                    title={translations.switchLanguage}
                  >
                    <Image
                      src="/images/flags/usa.svg"
                      width="24"
                      height="24"
                      alt="English"
                    />
                  </Link>
                </li>
              )}
              {language !== "de" && (
                <li>
                  <Link
                    href={retrievePathToOtherLanguage(pathname) ?? ""}
                    title={translations.switchLanguage}
                  >
                    <Image
                      src="/images/flags/de.svg"
                      width="24"
                      height="24"
                      alt="Deutsch"
                    />
                  </Link>
                </li>
              )}
            </ul>

            <ul className="profiles navbar-nav ms-lg-3 flex-row">
              <li className="nav-item">
                <ExternalNavLink href="https://github.com/SanjoSolutions">
                  <Image
                    src="/images/github-mark-white.svg"
                    alt={translations.profileOnGitHub}
                    title={translations.profileOnGitHub}
                    width={48}
                    height={48}
                  />
                </ExternalNavLink>
              </li>
              <li className="nav-item ms-3 ms-lg-0">
                <ExternalNavLink href="https://www.linkedin.com/in/jonas-aschenbrenner-aabab01a3/">
                  <Image
                    src="/images/In-White-48.png"
                    alt={translations.profileOnLinkedIn}
                    title={translations.profileOnLinkedIn}
                    width={48}
                    height={48}
                  />
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
                <li className="list-inline-item d-block d-md-inline-block text-center text-md-start me-0">
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
