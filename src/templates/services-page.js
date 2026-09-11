/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query ServicesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        introTitle
        introText
        servicesList {
          title
          description
          bullets
        }
      }
    }
  }
`

const ServicesPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { title, description, introTitle, introText, servicesList = [] } = frontmatter

  return (
    <Layout className="services-page">
      <Seo title={title} description={description} />
      
      <div sx={styles.container}>
        <h1 sx={styles.mainTitle}>{title}</h1>
        
        {/* Safe Top Intro Section */}
        <div sx={styles.introContainer}>
          <h3 sx={styles.introTitle}>{introTitle}</h3>
          <p sx={styles.introParagraph}>{introText}</p>
        </div>

        {/* Clean, Glitch-Free Card Grid */}
        <div sx={styles.gridContainer}>
          {servicesList.map((service, index) => (
            <div key={index} sx={styles.serviceCard}>
              <h3 sx={styles.cardTitle}>{service.title}</h3>
              <p sx={styles.cardDescription}>{service.description}</p>
              
              {service.bullets && service.bullets.length > 0 && (
                <ul sx={styles.bulletList}>
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} sx={styles.bulletItem}>
                      <span sx={styles.checkmark}>✓</span> {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding:1,
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
    maxWidth: "750px",
    margin: "0 auto 4rem auto",
  },
  introTitle: {
    fontSize: "22px",
    mb: 2,
    color: "primary",
    fontWeight: "600",
  },
  introParagraph: {
    fontSize: ["16px", "18px"],
    lineHeight: "1.7",
    color: "text",
    opacity: 0.85,
    m: 0,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
    gap: 4,
  },
  serviceCard: {
    bg: "surface",
    p: 4,
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
    border: "1px solid",
    borderColor: "inputBorder",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.08)",
    }
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "text",
    mt: 0,
    mb: 3,
    pb: 2,
    borderBottom: "2px solid",
    borderColor: "inputBorder",
  },
  cardDescription: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "text",
    opacity: 0.85,
    mb: 4,
  },
  bulletList: {
    listStyle: "none",
    p: 0,
    m: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  bulletItem: {
    fontSize: "14px",
    color: "text",
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  checkmark: {
    color: "primary",
    fontWeight: "bold",
  }
}
