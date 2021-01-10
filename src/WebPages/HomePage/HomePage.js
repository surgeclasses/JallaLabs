import React from "react";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Services from "../ServicesPage/Services";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
       <Services />
       <AboutPage />
       <ContactPage />
    </div>
  );
};

export default HomePage;
