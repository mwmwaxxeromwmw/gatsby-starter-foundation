/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already made a selection previously
    const hasConsented = localStorage.getItem("cookie_consent_choice")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (choice) => {
    localStorage.setItem("cookie_consent_choice", choice)
    setIsVisible(false)
    
    // Refresh the page if they accept to cleanly initialize gtag scripts
    if (choice === "accepted") {
      window.location.reload()
    }
  }

  if (!isVisible) return null

  return (
    <div sx={styles.bannerContainer}>
      <div sx={styles.bannerContent}>
        <p sx={styles.bannerText}>
          We use cookies to optimize your experience on Moks Auto and analyze our traffic. 
          By clicking "Accept All", you agree to our usage of cookies.
        </p>
        <div sx={styles.buttonGroup}>
          <button onClick={() => handleChoice("declined")} sx={styles.declineButton}>
            Decline
          </button>
          <button onClick={() => handleChoice("accepted")} sx={styles.acceptButton}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

const styles = {
  bannerContainer: {
    position: "fixed",
    bottom: [3, 4],
    left: [3, "auto"],
    right: [3, 4],
    width: ["auto", "420px"],
    bg: "background", // Automatically adapts to your light/dark background token
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15), 0px 1px 5px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    p: 3,
    zIndex: 99999,
    border: "1px solid",
    borderColor: "inputBorder",
    animation: "slideUp 0.4s ease-out",
    "@keyframes slideUp": {
      "0%": { transform: "translateY(20px)", opacity: 0 },
      "100%": { transform: "translateY(0)", opacity: 1 },
    },
  },
  bannerContent: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  bannerText: {
    m: 0,
    fontSize: "14px",
    color: "text", // Adapts dynamically to dark or light text theme variables
    lineHeight: "1.5",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 2,
    mt: 2,
  },
  acceptButton: {
    bg: "primary", // Uses your premium `#a2466c` maroon accent color
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    px: 3,
    py: 2,
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "opacity 0.2s",
    "&:hover": {
      opacity: 0.9,
    },
  },
  declineButton: {
    bg: "transparent",
    color: "text",
    border: "1px solid",
    borderColor: "inputBorder",
    borderRadius: "6px",
    px: 3,
    py: 2,
    fontSize: "14px",
    cursor: "pointer",
    transition: "background 0.2s",
    "&:hover": {
      bg: "rgba(0,0,0,0.05)",
    },
  },
}
