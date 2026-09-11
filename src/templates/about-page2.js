/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query MoksAutoAboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        introTitle
        introText
        stats {
          number
          label
        }
        featuresTitle
        featuresList {
          title
          description
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { 
    title, 
    description, 
    introTitle, 
    introText, 
    stats = [], 
    featuresTitle, 
    featuresList = [] 
  } = frontmatter

  return (
    <Layout className="about-page">
      <Seo title={title} description={description} />
      
      <div sx={styles.container}>
        <h1 sx={styles.mainTitle}>{title}</h1>
        
        {/* Intro Layout Block */}
        <div sx={styles.introContainer}>
          <h3 sx={styles.introTitle}>{introTitle}</h3>
          <p sx={styles.introParagraph}>{introText}</p>
        </div>

        {/* Stats Grid Counters */}
        {stats.length > 0 && (
          <div sx={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} sx={styles.statCard}>
                <div sx={styles.statNumber}>{stat.number}</div>
                <div sx={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Features Divider & Header */}
        <div sx={styles.featuresSection}>
          <h2 sx={styles.featuresHeading}>{featuresTitle}</h2>
          
          <div sx={styles.featuresGrid}>
            {featuresList.map((feature, index) => (
              <div key={index} sx={styles.featureCard}>
                <h4 sx={styles.featureCardTitle}>
                  <span sx={styles.bulletMarker}>■</span> {feature.title}
                </h4>
                <p sx={styles.featureCardText}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: 1,
  },
  mainTitle: {
    fontSize: ["32px", "42px"],
    fontWeight: "bold",
    textAlign: "center",
    mb: 3,
    color: "text",
  },
  introContainer: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 3rem auto",
  },
  introTitle: {
    fontSize: "24px",
    mb: 3,
    color: "text",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },
  introParagraph: {
    fontSize: ["16px", "18px"],
    lineHeight: "1.7",
    color: "text",
    opacity: 0.85,
    m: 0,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
    gap: 3,
    mb: "5rem",
  },
  statCard: {
    bg: "surface",
    p: 4,
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid",
    borderColor: "inputBorder",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "800",
    color: "text", // Uses your premium maroon color for the big numbers
    mb: 1,
  },
  statLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "text",
    opacity: 0.8,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  featuresSection: {
    mt: 4,
  },
  featuresHeading: {
    fontSize: ["24px", "28px"],
    fontWeight: "bold",
    textAlign: "center",
    mb: 4,
    color: "text",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr 1fr"],
    gap: 4,
  },
  featureCard: {
    bg: "surface",
    p: 4,
    borderRadius: "12px",
    border: "1px solid",
    borderColor: "inputBorder",
  },
  featureCardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "text",
    mt: 0,
    mb: 2,
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  bulletMarker: {
    color: "#10b981", // Reuses your premium emerald green to anchor each feature title point
    fontSize: "12px",
  },
  featureCardText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "text",
    opacity: 0.85,
    m: 0,
  },
}
