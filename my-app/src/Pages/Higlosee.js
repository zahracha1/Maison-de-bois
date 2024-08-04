

import React, { Component } from "react";
import photo from '../imgs/Produit/08.png'
import High1 from '../imgs/couleur/HIgh_glosse/h1.png'
import High2 from '../imgs/couleur/HIgh_glosse/h2.png'
import High3 from '../imgs/couleur/HIgh_glosse/h3.jpg'
import High4 from '../imgs/couleur/HIgh_glosse/h4.png'
import High5 from '../imgs/couleur/HIgh_glosse/h5.png'
import High6 from '../imgs/couleur/HIgh_glosse/h6.png'
import High7 from '../imgs/couleur/HIgh_glosse/h7.png'
import High8 from '../imgs/couleur/HIgh_glosse/h8.jpg'
import High9 from '../imgs/couleur/HIgh_glosse/h9.jpg'
import High10 from '../imgs/couleur/HIgh_glosse/h10.png'
import High11 from '../imgs/couleur/HIgh_glosse/h11.png'
import High12 from '../imgs/couleur/HIgh_glosse/h12.png'
import High13 from '../imgs/couleur/HIgh_glosse/h13.png'
import High14 from '../imgs/couleur/HIgh_glosse/h14.jpg'
import High15 from '../imgs/couleur/HIgh_glosse/h15.jpg'
import High16 from '../imgs/couleur/HIgh_glosse/h16.webp'
import High18 from '../imgs/couleur/HIgh_glosse/h19.jpg'
import High19 from '../imgs/couleur/HIgh_glosse/h20.png'
import High20 from '../imgs/couleur/HIgh_glosse/h21.jpg'
import High21 from '../imgs/couleur/HIgh_glosse/h22.jpg'
import Footer from "../component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './page.css'
class Higlosee extends Component{
   componentDidMount() {
      AOS.init({
         offset: 200,
         duration: 600,
         easing: 'ease-in-sine',
         delay: 0,
      });
  }
  render() {
    return(
        <>
           <section className="Produit"  >
               <div className="left " data-aos="fade-down" >
                 < h1 className="titre" >Panneaux High Gloss</h1>
                  <p className="text">MDF lamifié non à base de PVC, bultrabrillant, ayant subi un traitement de la surface qui lui permet d’augmenter sa résistance à la rayure et br sa résistance aux produits chimiques.</p>
                 
                  <div class="container">
                    <button type="button" class="btn" data-toggle="modal" data-target="#myModal">
                      Format
                    </button>
                    <div class="modal fade" id="myModal" >
                        <div className="modal-dialog modal-sm"  >
                           <div class="modal-content">
                             <div class="modal-header">
                               <h4 class="modal-title">format</h4>

                               <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <table className="table table-bordered table-sm">
                                 
                                 <tbody>
                                    <tr>
                                    <th>Caractéristique</th>
                                    <th>VALEURS</th>
                                    </tr>
                                    <tr>
                                     <td>Densité</td>
                                      <td>7.7-12-16-18 mm: 750 <br/> 22-25-30 mm: 720 </td>
                                    </tr>
                                    <tr>
                                      <td>Marge de tolérance de l&rsquo;épaisseur</td>
                                     <td>77-12-16-18 mm: +0,20 mm<br/>22-25-30 mm: * 0,30 mm</td>
                                    </tr>
                                    <tr>
                                      <td>Marge de tolérance de la tranche</td>
                                       <td>+ 2 mm/m,<br/>maksimum 15 mm</td>
                                    </tr>
                                    <tr>
                                      <td>Marge de tolérance de la surface</td>
                                      <td>2 mm/m</td>
                                    </tr>
                                    <tr>
                                       <td>Marge de tolérance de l&rsquo;homogénéité de la surface</td>
                                       <td>1.5 mm/m</td>

                                    </tr>
                                    <tr>
                                       <td>Augmentation de l&rsquo;épaisseur sur 24h</td>
                                       <td>7.7 mm ≤ 17%<br/>12 mm ≤ 15%<br/>16-18 mm ≤ 12%<br/>22-25-30 mm ≤ 10%</td>
                                    </tr>
                                    <tr>
                                       <td>Résistance à l&rsquo;inflexion</td>
                                       <td>7.7 mm ≤ 23 N/mm2<br/>12 mm ≤ 22 N/mm2<br/>16-18 mm ≤ 20 N/mm2<br/>22-25-30 mm ≤ 18 N/mm2</td>

                                    </tr>
                                    <tr>
                                       <td>Adhérence interne</td>
                                       <td>7.7 mm ≤ 0,65 N/mm2<br/>12 mm ≤ 0,60 N/mm2<br/>16-18-22-25-30 mm ≤ 0,55 N/mm2</td>
                                    </tr>
                                    <tr>
                                       <td>Teneur en Methanal</td>
                                       <td>≤ 8mg/100g</td>
                                    </tr>
                                    <tr>
                                       <td>Taux d&rsquo;humidité</td>
                                       <td>4+11%</td>
                                    </tr>
                                 </tbody>
                              </table>	  
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right" data-aos="fade-down">
                  <img  className="photo" src={photo} alt=''/>
               </div>
         
         </section>
         <section >

            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img src={High1} width="300" height="200"/>
                  <div className="des">Emperador Brown 651</div>
                  </div>
               </div>
             
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High2}  width="300" height="200"/>
                  <div className="des">Ephesus Black 6006</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High3}  width="300" height="200"/>
                  <div className="des">Ephesus White 6007</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High4}  width="300" height="200"/>
                  <div className="des">Dark Linen 379</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High5}  width="300" height="200"/>
                  <div className="des">Galaxy Cream 678</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High6}  width="300" height="200"/>
                  <div className="des">Galasy Honey Mist 640</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High7}  width="300" height="200"/>
                  <div className="des">Rubic Black 695</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High8}  width="300" height="200"/>
                  <div className="des">Cream Leather 381</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High9}  width="300" height="200"/>
                  <div className="des">ST BORDEAUX</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High10}  width="300" height="200"/>
                  <div className="des">HG TURQUOISE</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High11}  width="300" height="200"/>
                  <div className="des">HG EVORA</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High12}  width="300" height="200"/>
                  <div className="des">HG Metalic Etna 698</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High13}  width="300" height="200"/>
                  <div className="des">HG BIANCO</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High14}  width="300" height="200"/>
                  <div className="des">Picasso Gold 395</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High15}  width="300" height="200"/>
                  <div className="des">Matt Cashmere Copper 386</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High16}  width="300" height="200"/>
                  <div className="des">HG Emperador Beige</div>
                  </div>
               </div>
            </div>
               
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High18}  width="300" height="200"/>
                  <div className="des">'Matt Stone Grey 390</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High19}  width="300" height="200"/>
                  <div className="des">HG Metallic Blue 689</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High20}  width="300" height="200"/>
                  <div className="des">HG Line Drak Rose 676</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={High21}  width="300" height="200"/>
                  <div className="des">HG Rose Star 682</div>
                  </div>
               </div>
            </div>
   
         </section>
         <Footer/>
        </>
    )
  }
}
export default Higlosee;
