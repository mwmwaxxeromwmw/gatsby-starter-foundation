/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query MoksAutoContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page">
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || frontmatter.title + " " + site.siteMetadata.title}
      />
      
      <div sx={contactStyles.wrapper}>
        <h1 sx={contactStyles.mainTitle}>{frontmatter.title}</h1>
        
        {/* Top Text Content Layer */}
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
          sx={contactStyles.descriptionText}
        />

        {/* Visual Map Anchor */}
        <div sx={contactStyles.mapContainer}>
          <h3 sx={contactStyles.sectionHeading}>📍 Our Location</h3>
          <p sx={contactStyles.mapLabel}>Serving Blantyre and surrounding regions across Malawi.</p>
          <div sx={contactStyles.mapFrame}>
            <div sx={contactStyles.mapPlaceholderText}>
              🗺️ <strong>Moks Auto</strong><br />
              Blantyre, Malawi<br />
              <span sx={{ fontSize: "13px", opacity: 0.8 }}>Dealership-Level Diagnostics & Mobile Locksmith Services</span>
            </div>
          </div>
        </div>

        {/* Dynamic Service Request Card */}
        <div sx={contactStyles.formCard}>
          <h3 sx={contactStyles.sectionHeading}>📅 Book a Service / Request Quote</h3>
          
          <form
            className="contact-form"
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* Row 1: Name and Phone */}
            <div sx={contactStyles.formRow}>
              <p sx={contactStyles.formGroup}>
                <label sx={contactStyles.label}>
                  Your Name
                  <input type="text" name="name" placeholder="e.g. Chimwemwe Phiri" required sx={contactStyles.input} />
                </label>
              </p>
              <p sx={contactStyles.formGroup}>
                <label sx={contactStyles.label}>
                  Phone Number (10 Digits Only)
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="e.g. 0881234567" 
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required 
                    sx={contactStyles.input}
                  />
                </label>
              </p>
            </div>

            {/* Row 2: Service Type and Vehicle Context */}
            <div sx={contactStyles.formRow}>
              <p sx={contactStyles.formGroup}>
                <label sx={contactStyles.label}>
                  Service Needed
                  <select name="service_type" required sx={contactStyles.selectInput}>
                    <option value="">-- Select a Category --</option>
                    <option value="Diagnostics & Repairs">🛠️ Advanced Diagnostics & Repair</option>
                    <option value="Performance Tuning & Deletes">⚡ Performance Tuning & Deletes</option>
                    <option value="ECU Coding & Programming">💻 Module Repair, Coding & Flashing</option>
                    <option value="Locksmith & Immobilizer">🔒 Auto Locksmith & Security</option>
                    <option value="General Maintenance">🔧 General Service & Tune-up</option>
                  </select>
                </label>
              </p>
              <p sx={contactStyles.formGroup}>
                <label sx={contactStyles.label}>
                  Vehicle Year, Make, & Model
                  <input type="text" name="vehicle_info" placeholder="e.g. 2018 Toyota Hilux 2.4 GD-6" required sx={contactStyles.input} />
                </label>
              </p>
            </div>

            {/* Row 3: Optional Email */}
            <p sx={contactStyles.fullWidthGroup}>
              <label sx={contactStyles.label}>
                Email Address (Optional)
                <input type="email" name="email" placeholder="name@example.com" sx={contactStyles.input} />
              </label>
            </p>

            {/* Row 4: Text Details */}
            <p sx={contactStyles.fullWidthGroup}>
              <label sx={contactStyles.label}>
                Message / Extra Fault Details
                <textarea name="message" placeholder="Please describe any vehicle fault codes or the specific adjustments you need..." required sx={contactStyles.textarea}></textarea>
              </label>
            </p>
            
            {/* Submit Action */}
            <p className="text-align-right" sx={{ mt: 4, mb: 0 }}>
              <button
                sx={contactStyles.submitButton}
                type="submit"
              >
                Submit Job Request{" "}
                <span className="icon -right" sx={{ display: "inline-flex", ml: 2 }}>
                  <RiSendPlane2Line />
                </span>
              </button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  wrapper: {
    maxWidth: "850px",
    margin: "0 auto",
    padding: 1,
  },
  mainTitle: {
    fontSize: ["32px", "42px"],
    fontWeight: "bold",
    textAlign: "center",
    mb: 4,
    color: "text",
  },
  sectionHeading: {
    fontSize: "22px",
    fontWeight: "700",
    color: "text",
    mt: 0,
    mb: 3,
  },
  descriptionText: {
    marginBottom: "3.5rem",
    fontSize: "16px",
    lineHeight: "1.7",
    color: "text",
    opacity: 0.9,
    a: {
      color: "text",
      fontWeight: "bold",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    ul: {
      pl: 3,
      mb: 3,
    },
    li: {
      mb: 2,
    }
  },
  mapContainer: {
    mb: "4rem",
  },
  mapLabel: {
    fontSize: "15px",
    color: "text",
    opacity: 0.8,
    mb: 2,
    mt: 0,
  },
  mapFrame: {
    bg: "surface",
    border: "1px solid",
    borderColor: "inputBorder",
    borderRadius: "12px",
    p: 4,
    textAlign: "center",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
  },
  mapPlaceholderText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "text",
  },
  formCard: {
    bg: "surface",
    p:1,
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
    border: "1px solid",
    borderColor: "inputBorder",
  },
  formRow: {
    display: "flex",
    gap:1,
    flexDirection: ["column", "row"],
    m: 0,
    p: 0,
  },
  formGroup: {
    flex: 1,
    mb: 3,
    mt: 0,
  },
  fullWidthGroup: {
    mb: 3,
    mt: 0,
  },
  label: {
    fontWeight: "600",
    fontSize: "14px",
    color: "text",
    display: "block",
    width: "100%",
  },
  input: {
    width: "100%",
    border: "2px solid",
    borderColor: "inputBorder",
    borderRadius: "6px",
    bg: "inputBackground",
    color: "text",
    outline: "none",
    p: 3,
    mt: 2,
    fontSize: "16px",
    boxSizing: "border-box",
    transition: "all 0.2s",
    "&:focus": {
      borderColor: "primary",
    },
    "&:invalid:not(:placeholder-shown)": {
      borderColor: "#dc3545",
    }
  },
  textarea: {
    width: "100%",
    border: "2px solid",
    borderColor: "inputBorder",
    borderRadius: "6px",
    bg: "inputBackground",
    color: "text",
    outline: "none",
    p: 3,
    mt: 2,
    fontSize: "16px",
    fontFamily: "body",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: "130px",
    transition: "all 0.2s",
    "&:focus": {
      borderColor: "primary",
    }
  },
  selectInput: {
    width: "100%",
    border: "2px solid",
    borderColor: "inputBorder",
    borderRadius: "6px",
    bg: "inputBackground",
    color: "text",
    outline: "none",
    p: 3,
    mt: 2,
    fontSize: "16px",
    boxSizing: "border-box",
    cursor: "pointer",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://w3.org' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "1em",
    transition: "all 0.2s",
    "&:focus": {
      borderColor: "primary",
    }
  },
  submitButton: {
    variant: "variants.button",
    width: ["100%", "auto"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "primary",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    px: 4,
    py: 3,
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.2s",
    "&:hover": {
      opacity: 0.9
    }
  }
}
