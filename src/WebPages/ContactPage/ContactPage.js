import React from "react";
import { ImPhone, ImLocation, ImMail2 } from "react-icons/im";
import "./ContactPage.css";
import ContactMailIcon from '@material-ui/icons/ContactMail';

const ContactPage = () => {
  return (

    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <div class="contact-background">
            <div class="container">
              <div class="screen">
                <div class="screen-header">
                  <div class="screen-header-left">
                    <div class="screen-header-button close"></div>
                    <div class="screen-header-button maximize"></div>
                    <div class="screen-header-button minimize"></div>
                  </div>
                  <div class="screen-header-right">
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div class="screen-body">
                  <div class="screen-body-item left">
                    <div class="app-title">
                      <span>CONTACT</span>
                      <span>US</span>
                    </div>
                    <div class="app-contact">CONTACT INFO
          </div>
                    <div class="app-contact-info">
                      <p><ImLocation style={{ marginRight: "0.5rem", blockSize: "12px" }} />No. 15, 25Th A Main, Mariswamy Layout
          Agara, HSR Layout, Sector - 1
          Bengaluru</p>
                      <p><ImPhone style={{ marginRight: "0.5rem", blockSize: "12px" }} />+91 9014089189</p>
                      <p><ImMail2 style={{ marginRight: "0.5rem", blockSize: "12px" }} />surgeclasses2020@gmail.com</p>
                    </div>
                  </div>
                  <div class="screen-body-item">
                    <div class="app-form">
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="NAME"></input>
                      </div>
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL"></input>
                      </div>
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="CONTACT NO"></input>
                      </div>
                      <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE"></input>
                      </div>
                      <div class="app-form-group buttons">
                        <button class="app-form-button" onClick={() => console.log("Success")}>SEND</button>
                        <button class="app-form-button">CANCEL</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactPage;