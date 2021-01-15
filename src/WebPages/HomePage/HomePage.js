import React from "react";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Services from "../ServicesPage/Services";
import TopBanner from "../TopBanner";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <TopBanner />
       <Services />
       <AboutPage />
       
    </div>
  );
};

export default HomePage;
