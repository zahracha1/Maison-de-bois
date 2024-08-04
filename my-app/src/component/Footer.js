import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";



function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <p >
            &copy;{new Date().getFullYear()} COPYRIGHT © | 2022 POWERED BY ZIE| ALL RIGHTS RESERVED
          </p>
          </div>
          
        </div>
      
      </div>
    </div>
  );
}

export default Footer;
