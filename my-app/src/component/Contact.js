import React,{useEffect}  from "react";
import "./Contact.css";
import Footer from "./Footer";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     
       
      <div className=" contact" >
       <h1>CONTACTEZ-NOUS</h1>

      </div>
      <div className="pricing" data-aos="fade-up">
        <h1> NOS CONTACT</h1>
        <div className="card-container" data-aos="fade-up"
     data-aos-duration="3000">
          <div className="card">
            <p>
              <a href="https://www.facebook.com/profile.php?id=100063785806544&sk=about">
                {" "}
                <h4>
                  <BsFacebook /> Maison Bois M'Saken <p>MBM</p>
                </h4>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/">
                <h4>
                  <AiFillInstagram /> mbmmsaken
                </h4>
              </a>{" "}
            </p>
          </div>

          <div className="card">
            <p>
              <h4>
                <BsFillTelephoneFill /> 54 512 714/<BsFillTelephoneFill />54 311 092
              </h4>
            </p>
            <p>
              <h4>
                <GiRotaryPhone /> 73261952
              </h4>
            </p>
            <p>
              <h4>
                <IoIosMail /> bouassidabois@mbm.tn
              </h4>
            </p>
          </div>
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <h1>NOS ADRESSE</h1>
        <iframe data-aos="flip-right"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12956.04523515759!2d10.5852483!3d35.7259404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58c50719991de985!2smaison%20du%20bois%20m&#39;saken%20MBM!5e0!3m2!1sfr!2stn!4v1670618510454!5m2!1sfr!2stn"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>
      <Footer/>
    </>
  );
};
export default Contact;
