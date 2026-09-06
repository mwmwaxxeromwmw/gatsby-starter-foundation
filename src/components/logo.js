import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <div className="site-logo">
    <Link to="/">
      <StaticImage 
        src="../../static/assets/logo.png" 
        alt="Moks Auto Logo"
        placeholder="blurred"
        height={50} // Adjust this height to fit your header layout
      />
    </Link>
  </div>
)

export default Logo
