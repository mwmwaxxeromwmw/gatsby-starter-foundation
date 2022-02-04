import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Got your message</h1>
      <p>Thank you for contacting Moks Auto. We will get back to you shortly.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Lets go back to the homepage
      </Link>
    </div>
  </Layout>
)

export default Thanks
