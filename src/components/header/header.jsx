import React, { useState, useEffect } from "react"
import "./header.css"
import { Link } from "react-router-dom"

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleMenuItemClick = () => {
    setDropdownOpen(false)
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setScrolled(scrollTop > 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Zakat
        </Link>
        <nav className={`nav ${isDropdownOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/donation-history"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                Pembayaran
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                Tentang
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`dropdown ${isDropdownOpen ? "open" : ""}`}
          onClick={handleDropdownToggle}
        >
          <div className="dropdown-line"></div>
          <div className="dropdown-line"></div>
          <div className="dropdown-line"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
