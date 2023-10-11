import React from "react"
import { Link } from "react-router-dom"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Zakat - Bantu Meringankan Beban Sesama</h1>
        <h3 className="subtitle">
          Bergabunglah dengan kami dalam memberikan bantuan kepada mereka yang
          membutuhkan. Dukungan Anda membuat perbedaan dalam kehidupan orang
          lain.
        </h3>
        <Link to="/donate" className="button">
          Bayar
        </Link>
      </div>
    </div>
  )
}

export default HomePage
