import React,{useEffect}  from "react";
import './about.css';
import { BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Footer from "../component/Footer";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import prod1 from "../imgs/01.jpg"
import prod2 from "../imgs/02.png"
import prod3 from "../imgs/03.png"
import ReactPlayer from 'react-player'
import {FaStore} from 'react-icons/fa'
import {FaPeopleCarry} from 'react-icons/fa'
import{BsTruck} from 'react-icons/bs' 

import './about.css';
import AOS from "aos";
import "aos/dist/aos.css";
const About=()=>{
  useEffect(() => {
    AOS.init();
  }, []);
    return(
        <>
       
      
          <div className="page-header">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
             <div className="carousel-item active">
               <img className="d-block w-100" src={prod2} alt="First slide"/>
                <div className="carousel-caption ">
                  <h5>DÉCOUVREZ NOTRE LARGE PALETTE DE MATÉRIAUX ET DE TEXTURES...</h5>
                </div>
              </div>
            <div className="carousel-item">
             <img className="d-block w-100" src={prod1} alt="Second slide"/>
             <div className="carousel-caption " >
                <h5 >DÉCOUVREZ NOTRE LARGE PALETTE DE MATÉRIAUX ET DE TEXTURES...</h5>
              </div>
            </div>
            <div className="carousel-item">
             <img className="d-block w-100" src={prod3} alt="Third slide"/>
             <div className="carousel-caption ">
                  <h5>DÉCOUVREZ NOTRE LARGE PALETTE DE MATÉRIAUX ET DE TEXTURES...</h5>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <BsFillArrowLeftCircleFill size={45}/>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <BsFillArrowRightCircleFill size={45} />
          </a>
        </div>
        <section data-aos="fade-up">
          <div className="container-histoir">
            <div className="col-md-12">
                <h2>
                L’HISTOIRE DE NOTRE SUCCÈS
                </h2>
                <p> <span>MBM</span>, est une société active depuis 30 ans avec une grande passion et une forte créativité, elle est spécialisée dans le secteur d'activité de
                   la fabrication du bois et d'autres menuiseries elle s’impose comme un partenaire incontournable pour
                   les professionnels du métier (STIBOIS.....) aussi elle importe ses produits de l'étranger (France, Turquie.),elle bénéficie d’une expertise précise des bois reçus
                   et nous accordons une grande importance aux divers contrôles qualités que nous imposons pour chaque nouvelle importation.
                   <br/>
                    Aujourd’hui  MBM propose une large gamme de produits(contre-plaqué, panneaux plaqués panneaux mélamines, Panneau high gloss, panneaux MDF bruts, panneaux hydrofuges).
                   Notre entreprise se compose d'un personnel  bien équilibré afin de gagner votre confiance et votre bonheur.
                   L’ensemble des personnes responsables du succès de la société fournit des efforts constants afin de proposer à notre clientèle
                   variée tous les produits dont elle a besoin, tout au long de l’année, à des tarifs compétitifs.
                    Pendant les années dernières il avait une grande évolution sur le niveau des  de notre société .
                    Le total du bilan a augmenté de 16,68 % entre 2021 et 2022. 
                </p>
            </div>
          </div>
          <div className="container-video" data-aos="zoom-in">
            
                <ReactPlayer  url='https://fb.watch/gVLFay0Nc1/' width="100%" height="100%" />
            
          </div>
          <div className="container-service" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="row">
             <div className="col-md-12">
                <h2> Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" >
                <div className="service__box ">
                  <div className="icon">
                      <FaStore/>
                  </div>
                  <div className="service__meta">
                    <p className="p  service__text">
                      Notre magasin a votre service
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-down"
      data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
                <div className="service__box ">
                  <div className="icon">
                    <FaPeopleCarry/>
                  </div>
                  <div className="service__meta">
                    <p className="p service__text">
                      Retrait en magasin 
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
              <div className=" p service__box ">
                <div className="icon">
                  <BsTruck/>
                </div>
                <div className="service__meta">
                  <p className="p service__text">
                    Livraison à domicile 
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <Footer/>

  </>
       
    )
}
export default About
 