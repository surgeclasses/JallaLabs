import React from "react";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Services from "../ServicesPage/Services";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
       <Services />
       <h1> Raman </h1>
       <AboutPage />
       <ContactPage />
    </div>
  );
};

export default HomePage;
