import React from "react"
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Developed with Developed with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://t.me/Danniielo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Arly Haryanto Pamungkas
          </a>
        </p>
        <p className="footer-text">
          Email :
          <a href="mailto:arlypamungkas28@gmail.com" className="footer-link">
            {" "}
            arlypamungkas28@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
