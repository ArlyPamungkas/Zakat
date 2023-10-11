import React from "react"
import Card from "../../components/card/card"
import ErrorMessage from "../../components/error-message/error-message"
import "./DonationHistoryPage.css"
import { Link } from "react-router-dom"

function DonationHistoryPage() {
  const donationData = [
    {
      id: 1,
      title: "Zakat Mal",
      description:
        "Zakat mal adalah zakat yang dikenakan pada segala jenis kekayaan.",
      image:
        "https://media.istockphoto.com/id/184030333/photo/save-money.jpg?s=2048x2048&w=is&k=20&c=sy2aoUqT0QSL50D3my5wvwqFB1xTBm04YqDsUqSYab8=",
    },
    {
      id: 2,
      title: "Zakat Penghasilan(Usaha)",
      description:
        "Selain zakat mal, ada juga zakat penghasilan atau zakat usaha. Zakat ini dikenakan pada penghasilan atau pendapatan yang diperoleh dari usaha, bisnis, atau profesi.",
      image:
        "https://media.istockphoto.com/id/1130578497/photo/moneybox-on-wooden-table.jpg?s=612x612&w=0&k=20&c=BAFOMd4sQGL2iY5I0eBh0iaAJ8svOrpLHOSPgYyCZ1E=",
    },
    {
      id: 3,
      title: "Zakat Fitrah",
      description:
        "Zakat fitrah adalah zakat yang harus disalurkan oleh setiap individu Muslim menjelang hari Idul Fitri pada bulan suci Ramadhan.",
      image:
        "https://media.istockphoto.com/id/1071757792/photo/money-in-glass-jar.jpg?s=2048x2048&w=is&k=20&c=weJaRniInb7sLZFt71nKBnvkqg2_u34BYNZ_GKr4rTc=",
    },
  ]

  return (
    <div className="donation-history-container">
      <h2 className="donation-history-title">Donation History</h2>
      <Link to="/donate">
        {donationData.length > 0 ? (
          <div className="donation-history-list">
            {donationData.map((donation) => (
              <Card
                key={donation.id}
                title={donation.title}
                description={donation.description}
                image={donation.image}
                amount={donation.amount}
                date={donation.date}
              />
            ))}
          </div>
        ) : (
          <ErrorMessage message="No donation history found." />
        )}
      </Link>
    </div>
  )
}

export default DonationHistoryPage
