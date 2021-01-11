import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const TopBanner = () => {
    
    const items = [
        {
          key: '1',
          title: 'We Leads to the Technical Innovation',
          content: 'Our Aim Is to build such a technical and learning environment where Students can learn the things of their Industrial Needs. We work together to break the situation of the education market and help students learn latest market technologies from the best of instructors with a background of Top Institutes of the Country along with years of work experience in the technology industry.',
        },
        {
          key: '2',
          title: "Let's start with our Surge Classes",
          content: "An Online Learning Platform to develop Industrial Skills among our Learners. An Amazing & Innovative Plan to increase the Learner's Productivity. We designed the most effective course structure that works on every single student that joins.",
        },
        {
          key: '3',
          title: 'None',
          content: "Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write # Yet to write",
        },
      ]  

  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay >
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                {/* <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div> */}
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default TopBanner;