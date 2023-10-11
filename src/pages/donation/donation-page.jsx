import React, { useState } from "react"
import "./DonationPage.css"
import { Link } from "react-router-dom"

function DonationPage() {
  const [donationAmount, setDonationAmount] = useState("")

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle donation submission
    console.log("Donation amount:", donationAmount)
    // Additional logic for processing the donation
  }

  return (
    <div className="donation-container">
      <div className="donation-content">
        <h1 className="donation-title">Silahkan Bayar Zakat Anda</h1>
        <p className="donation-subtitle">
          Zakat Anda dapat membantu bagi mereka yang membutuhkannya.
        </p>
      </div>
      <form className="donation-form" onSubmit={handleSubmit}>
        <input
          className="donation-input"
          type="number"
          placeholder="Jumlah Zakat"
          required
          value={donationAmount}
          onChange={handleDonationChange}
          min="1"
        />
        <button className="donation-button" type="submit">
          <Link to="/thanks">Bayar</Link>
        </button>
      </form>
    </div>
  )
}

export default DonationPage
