"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutExecutives from "./components/AboutExecutives";
import Services from "./components/Services";
import News from "./components/News";
import TrustedClients from "./components/TrustedClients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutExecutives /> 
        <Services />
        <News />
        <TrustedClients />
        <Contact />
        <Footer />

      </main>
    </>
  );
}
