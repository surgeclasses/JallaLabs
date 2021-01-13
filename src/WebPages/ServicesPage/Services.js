import React from 'react';
import "./Services.css";
import { Button } from 'antd';


const Services = () => {

  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Services and Benefits</h2>
          <p>Start your career with us. Look here what we are-</p>
        </div>

        <div className="service-box">
            <li className="service-box1">
              <h1 className="service-h1Fonts">Surge Classes</h1>
              <div className="service-image1" />
              <Button type="primary" size="large" href="https://www.surgeclasses.com/" target="_blank">Learn More - Visit Surge Classes</Button>
              <p className="service-pFonts"> Start with Surge Classes. No matter your industry or goal, better information means better decisions. Our daily imagery gives you fresh insights about more places on the planet than anyone else.</p>
              
            </li>

            <li className="service-box2">
              <h1 className="service-h1Fonts">Deep Learning Projects</h1>
              <div className="service-image2" />
              <Button type="primary" size="large" href="https://www.surgeclasses.com/" target="_blank">Learn More - Visit Deep Learning Projects</Button>
              <p className="service-pFonts"> Start with something simple and make changes incrementally. Model optimizations like regularization can always wait after the code is debugged. Visualize your predictions and model metrics frequently.</p>
              
            </li>
        </div>

      </div>
    </div>
  );
}

export default Services;