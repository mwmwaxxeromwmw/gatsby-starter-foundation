/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query ServicesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`

const ServicesPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  // Split the intro content from the card block safely using array positions
  const splitContent = html.split(":::service-cards")
  const topIntroHtml = splitContent[0] || ""
  const cardsHtmlRaw = splitContent[1] ? splitContent[1].replace(":::", "") : ""

  // Parse HTML strings into neat card object layers
  const cardsData = cardsHtmlRaw
    ? cardsHtmlRaw
        .split("<h4>")
        .filter(Boolean)
        .map((item) => {
          const parts = item.split("</h4>")
          const title = parts[0] || ""
          
          const bodyParts = parts[1] ? parts[1].split("<ul>") : [""]
          const description = bodyParts[0] || ""
          
          const bullets = bodyParts[1]
            ? bodyParts[1]
                .replace("</ul>", "")
                .split("<li>")
                .filter(Boolean)
                .map(li => li.replace("</li>", "").trim())
            : []

          return { title, description, bullets }
        })
    : []

  return (
    <Layout className="services-page">
      <Seo title={frontmatter.title} description={frontmatter.description} />
      
      <div sx={styles.container}>
        <h1 sx={styles.mainTitle}>{frontmatter.title}</h1>
        
        <div 
          sx={styles.introText}
          dangerouslySetInnerHTML={{ __html: topIntroHtml }} 
        />

        <div sx={styles.gridContainer}>
          {cardsData.map((card, index) => (
            <div key={index} sx={styles.serviceCard}>
              <h3 sx={styles.cardTitle}>{card.title}</h3>
              <div 
                sx={styles.cardDescription} 
                dangerouslySetInnerHTML={{ __html: card.description }} 
              />
              {card.bullets.length > 0 && (
                <ul sx={styles.bulletList}>
                  {card.bullets.map((bullet, idx) => (
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
    padding:,
  },
  mainTitle: {
    fontSize: ["32px", "42px"],
    fontWeight: "bold",
    textAlign: "center",
    mb: 3,
    color: "text",
  },
  introText: {
    fontSize: ["16px", "18px"],
    lineHeight: "1.7",
    textAlign: "center",
    maxWidth: "750px",
    margin: "0 auto 4rem auto",
    color: "text",
    opacity: 0.85,
    p: {
      m: 0,
    },
    h3: {
      fontSize: "22px",
      mb: 2,
      color: "primary",
    }
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
    opacity: 0.9,
    mb: 3,
    p: {
      m: 0
    }
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
