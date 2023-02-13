import React from 'react'
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
;import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
// import {
//   BrowserRouter as Router,
//   createBrowserRouter,
//   Routes,
//   redirect
// } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
        <Hero />
        <Booking />
      <div className="sticky bottom-0 z-10">
        <Footer />
      </div>
    </>
  )
}

export default App
