import "./Home.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import photo10 from "../imgs/10.jpg";
import photo12 from "../imgs/12.jpg";
import photo16 from "../imgs/16.png";
import Footer from "../component/Footer";
import Produit from "./Produit";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
       <div className="header">

<div className="contnent">
  <div className="container">
    <div className="row">
      <div className="col md-4" >
    <h1 data-aos="fade-up"  data-aos-duration="2500"> <span>Bienvenus</span> <span>Chez Maison</span> <span>De Bois</span> <span>M'SAKEN</span> </h1>
    <button data-aos="fade-up" data-aos-duration="2500" > <a href="/Produit"> Découvrir</a></button>
    <button data-aos="fade-up" data-aos-duration="2500" > <a href="/Contact">Contact</a></button>
    </div>
</div>
</div>
</div>
</div>

      <section className="about-us">
        <div data-aos="fade-up" className="container-about-us" >
          <h1 data-aos="fade-up"> L’HISTOIRE DE NOTRE SUCCÈS</h1>
          <div className="row ">
            <div className=" col-md-6">
              <p className="texte" data-aos="fade-up-right">
                {" "}
                <span>MBM</span>, est une société active depuis 30 ans avec une
                grande passion et une forte créativité, elle est spécialisée
                dans le secteur d'activité de la fabrication du bois et d'autres
                menuiseries elle s’impose comme un partenaire incontournable
                pour les professionnels du métier (STIBOIS.....). <br />
              </p>
            </div>
            <div className="col-md-5" data-aos="fade-up-left">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img  src={photo10} class="silder" alt="..."  />
                  </div>
                  <div className="carousel-item">
                    <img src={photo12} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo16} class="silder" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" section-produit" data-aos="fade-up">
        <h1>NOS PRODUIT</h1>
        <p data-aos="fade-up">
          Aujourd’hui <span>MBM </span>propose une large gamme de
          produits(contre-plaqué, panneaux plaqués panneaux mélamines, Panneau
          high gloss, panneaux MDF bruts, panneaux hydrofuges).
        </p>
        <div className="produit">
          <Produit />
        </div>
        <br />
      </section>
      <div className="row">
        <div className="adresse" data-aos="fade-down">
          <h2>NOS ADRESSE</h2>
        </div>
        <iframe data-aos="flip-left"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12956.04523515759!2d10.5852483!3d35.7259404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58c50719991de985!2smaison%20du%20bois%20m&#39;saken%20MBM!5e0!3m2!1sfr!2stn!4v1670618510454!5m2!1sfr!2stn"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Header;
