import React from "react";
import "./AboutPage.css";
import image from "../../assets/images/new-about.png";


const AboutPage = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <div className="aboutus-header">
            <h2>About Us</h2>
          </div>
          <div className="aboutus-info">
            <p>We <span>JallaLabs </span> who are wildly passionate about changing the way content is created on the web. We believe content creation has been constrained by technology for too long and creativity has taken a backseat. We exist to unlock creativity. Our platform empowers the world's leading brands to share their stories and engage their audiences.</p>
          </div>
        </div>
        <div className="aboutus-features">
          <div className="aboutus-features1">
            <div className="features-css">
              <h2>Dedicated Team of Industry Experts</h2>
              <p>Even with all the right information available, human involvement cannot be omitted.</p>
            </div>
          </div>

          <div className="aboutus-features2">
            <div className="features-css">
              <h2>Outcome-Driven Approach</h2>
              <p>Output-driven management is based on goals and criteria.</p>
            </div>
          </div>

          <div className="aboutus-features3">
            <div className="features-css">
              <h2>Multiple Projects</h2>
              <p>Managing multiple projects presents different and additional challenges as compared with the management of a single project.</p>
            </div>
          </div>

        </div>

        <img className="about-image" src={image} />

        <div className="aboutpage-css">
          <h2>Our Culture</h2>
          <p>You'll find our core values expressed in everything we do, whether it's building our product, designing a new office, or planning team outings.</p>
        </div>

        <div className="aboutuspage-column">
          <div className="aboutuspage-row">
            <div className="aboutuspage-row1"><h2>Dedicated Mentors</h2>
              <p> Strong Support of Experienced Mentors who helps you always throughout the course journey</p>
            </div>
            <div className="aboutuspage-row2"><h2>Leadership and Mentoring</h2> 
            <p> Constant and Continious Support of Instructors at every stage</p>
            </div>
          </div>
          <div className="aboutuspage-row">
            <div className="aboutuspage-row3"><h2>Get Course Certification</h2> 
            <p> Get Certified for every course and Intern Program</p>
            </div>
            <div className="aboutuspage-row4"><h2>Good Working Environment</h2> 
            <p> Learning and healthy environment for good understanding</p>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default AboutPage;
