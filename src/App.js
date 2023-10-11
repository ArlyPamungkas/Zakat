import "./App.css"
import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/home-page"
import DonationPage from "./pages//donation/donation-page"
import DonationHistoryPage from "./pages/donation-history/donation-history"
import AboutUsPage from "./pages/about-us-page/about-us-page"
import ContactUsPage from "./pages/contact-us-page/contact-us-page"
import Thanks from "./pages/thanks/thanks"
import NotFoundPage from "./pages/not-found/not-found"
import Layout from "./Layout"

function App() {
  return (
    <div className="app-container">
      <Layout>
        <div className="main-content ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/donation-history" element={<DonationHistoryPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Layout>
    </div>
  )
}

export default App
