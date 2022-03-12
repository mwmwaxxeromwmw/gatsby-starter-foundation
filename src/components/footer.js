/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      <small>&copy; Copyright 2022, Moks Auto. All Rights Reserved</small>
      </p>
      <ul class="social_footer_ul">
        <li><a href="https://www.moksauto.com"><i class="fab fa-envelope"></i></a></li>
        </ul>
    </div>
  </footer>
)

export default Footer
