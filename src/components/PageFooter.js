import React from 'react';
import { ImPhone, ImLocation, ImMail2 } from "react-icons/im";
import { BackTop } from 'antd';

const PageFooter = () => {
  return (
    <div className="container-fluid">
    <div className="footer-flex-css">
    <div className="footer-contactus">
    <h3>Contact Info:</h3>
    <p><ImLocation style={{ marginRight: "0.5rem" }} />No. 15, 25Th A Main, Mariswamy Layout Agara, HSR Layout, Sector - 1 Bengaluru</p>
    <p><ImPhone style={{ marginRight: "0.5rem" }} />+91 9014089189</p>
    <p><ImMail2 style={{ marginRight: "0.5rem" }} />surgeclasses2020@gmail.com</p>
    </div>
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">JallaLabs</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
      </div>
      <div className="copyright">Copyright &copy; 2020 JallaLabs</div>
    </div>
  );
}

export default PageFooter;