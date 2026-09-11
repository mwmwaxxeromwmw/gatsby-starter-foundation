/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "../components/theme"
import CookieBanner from "./cookie-banner" // 👈 1. Imported the banner here

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site } = useStaticQuery(query) // 👈 Cleaned up the unused siteSearchIndex destructuring
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
          </div>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>{children}</main>
      <Footer />
      
      {/* 👈 2. Injected the Cookie Banner globally right here */}
      <CookieBanner /> 
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
