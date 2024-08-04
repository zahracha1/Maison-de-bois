import React, { Component } from "react";
import photo from'../imgs/Produit/09.png'
import './page.css'
import plaq1 from '../imgs/couleur/plaqé/P1.jpg'
import plaq2 from '../imgs/couleur/plaqé/P2.jpg'
import plaq3 from '../imgs/couleur/plaqé/P3.jpg'
import plaq4 from '../imgs/couleur/plaqé/P4.webp'
import plaq5 from '../imgs/couleur/plaqé/P5.jpg'
import plaq6 from '../imgs/couleur/plaqé/P6.webp'
import plaq7 from '../imgs/couleur/plaqé/P7.jpg'
import plaq8 from '../imgs/couleur/plaqé/P8.jpg'
import plaq9 from '../imgs/couleur/plaqé/P9.jpg'
import plaq10 from '../imgs/couleur/plaqé/p10.webp'
import plaq11 from '../imgs/couleur/plaqé/p11.jpg'
import plaq12 from '../imgs/couleur/plaqé/p12.jpg'
import Footer from "../component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


class Plaque extends Component {
   componentDidMount() {
      AOS.init({
         offset: 100,
         duration: 600,
         easing: 'ease-in-sine',
         delay: 0,
      });
  }
  render() {
   return(
      <>
         <section className="Produit" >
           <div className="left">
             <h1 className="titre" >Panneau Plaqué</h1>
              <p className="text">Un placage Essence Fine bien sélectionné et trié qui suit un processus de jointage à colle de dernière technologie,  <br/>selon des modes variés (standards ou spécifiques), pour venir revêtir un panneau MDF ou Particules sur 1 ou 2 faces par  pressage à chaud avec une très bonne qualité de collage (D3). Lui conférant ainsi à la fois l’esthétique du bois noble et les performances techniques du panneau..</p>
              <div class="container">
                  <button type="button" class="btn" data-toggle="modal" data-target="#myModal">
                     Format
                  </button>
                  <div class="modal fade" id="myModal" >
                     <div className="modal-dialog modal-lg"  >
                        <div class="modal-content">
                           <div class="modal-header">
                              <h4 class="modal-title">format</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                           </div>
                           <div class="modal-body">
                           <table className="table table-bordered table-sm">
                              <tbody>
                              <tr>
                                <td rowspan="2" width="20%"><strong>Support</strong></td>
                                <td rowspan="2" width="12%"><strong>Épaisseur</strong></td>
                                 <td colspan="6" width="67%"><strong>Dimensions</strong></td>
                              </tr>
                              <tr>
                                <td width="11%"><strong>280&#215;210</strong></td>
                                <td width="11%"><strong>215&#215;185</strong></td>
                                 <td width="11%"><strong>250&#215;185</strong></td>
                                 <td width="11%"><strong>280&#215;185</strong></td>
                                 <td width="11%"><strong>366&#215;185</strong></td>
                                 <td width="9%"><strong>91&#215;185</strong></td>
                              </tr>
                              <tr>
                                <td rowspan="6" width="20%"><strong>Particule</strong></td>
                                 <td width="12%"><strong>16</strong></td>
                                <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong> </strong></td>
                                <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong>✓</strong></td>
                                <td width="11%"><strong><u> </u></strong></td>
                                <td width="9%"><strong>✓</strong></td>
                              </tr>
                              <tr>
                                 <td width="12%"><strong>18</strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong>✓</strong></td>
                                 <td width="11%"><strong> </strong></td>
                                <td width="11%"><strong><u> </u></strong></td>
                                <td width="9%"><strong>✓</strong></td>
                              </tr>
                              <tr>
                               <td width="12%"><strong>19</strong></td>
                               <td width="11%"><strong> </strong></td>
                               <td width="11%"><strong> </strong></td>
                               <td width="11%"><strong> </strong></td>
                                <td width="11%"><strong>✓</strong></td>
                               <td width="11%"><strong><u> </u></strong></td>
                                 <td width="9%"><strong>✓</strong></td>
                              </tr>
                              <tr>
                                <td width="12%"><strong>22</strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong>✓</strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong><u> </u></strong></td>
                                 <td width="9%"><strong>✓</strong></td>
                              </tr>
                              <tr>
                                <td width="12%"><strong>25</strong></td>
                                <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong>✓</strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong><u> </u></strong></td>
                                 <td width="9%"><strong>✓</strong></td>
                              </tr>
                              <tr>
                               <td width="12%"><strong>30</strong></td>
                                <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong>✓</strong></td>
                                 <td width="11%"><strong> </strong></td>
                                 <td width="11%"><strong><u> </u></strong></td>
                                 <td width="9%"><strong>✓</strong></td>
                              </tr>
                           </tbody>
                        </table>
                        <table class="table table-bordered table-xl">
                         <tbody>
                          <tr>
                            <td rowspan="2" width="86"></td>
                             <td rowspan="2" width="86"><strong>Épaisseur</strong></td>
                             <td colspan="5" width="432"><strong>Dimensions</strong></td>
                           </tr>
                           <tr>
                            <td width="86"><strong>280&#215;210</strong></td>
                            <td width="86"><strong>215&#215;185</strong></td>
                            <td width="86"><strong>250&#215;185</strong></td>
                             <td width="86"><strong>280&#215;185</strong></td>
                             <td width="86"><strong>366&#215;185</strong></td>
                           </tr>
                           <tr>
                            <td rowspan="9" width="86"><strong>MDF</strong></td>
                             <td width="86"><strong>5</strong></td>
                             <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                          </tr>
                           <tr>
                             <td width="86"><strong>8</strong></td>
                             <td width="86"><strong> </strong></td>
                             <td width="86"><strong> </strong></td>
                             <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong>✓</strong></td>
                             <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>10</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>12</strong></td>
                             <td width="86"><strong> </strong></td>
                              <td width="86"><strong> </strong></td>
                             <td width="86"><strong>✓</strong></td>
                             <td width="86"><strong> </strong></td>
                            <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>16</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                              <td width="86"><strong>18</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>22</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>25</strong></td>
                             <td width="86"><strong> </strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>30</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong> </strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td rowspan="2" width="86"><strong>MDF super light</strong></td>
                             <td width="86"><strong>15</strong></td>
                             <td width="86"><strong><u> </u></strong></td>
                             <td width="86"><strong><u> </u></strong></td>
                             <td width="86"><strong>✓</strong></td>
                             <td width="86"><strong><u> </u></strong></td>
                             <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                              <td width="86"><strong>18</strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                           <tr>
                             <td width="86"><strong>MDF Hydrofuge</strong></td>
                              <td width="86"><strong>18</strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                              <td width="86"><strong>✓</strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                              <td width="86"><strong><u> </u></strong></td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                  </div> 
               </div>
            </div>

            </div>
            </div>
            <div className="right">
               <img  className="photo" src={photo} alt=''/>
            </div>
      
         </section>
         
         <section>

            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img src={plaq1} width="300" height="200"/>
                  <div className="des"> EBENE RC</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq2}  width="300" height="200"/>
                  <div className="des">WENGE RC</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq3}  width="300" height="200"/>
                  <div className="des"> MACASAR RC </div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq4}  width="300" height="200"/>
                  <div className="des">CHÊNE FIL RC</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq5}  width="300" height="200"/>
                  <div className="des">FRÊNE FIL</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq6}  width="300" height="200"/>
                  <div className="des">CHÊNE FIL</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq7}  width="300" height="200"/>
                  <div className="des">SAPELLI DOSSE</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq8}  width="300" height="200"/>
                  <div className="des">RADIATA</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up" >
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq9}  width="300" height="200"/>
                  <div className="des">FRÊNE</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={plaq10}  width="300" height="200"/>
                  <div className="des">CHÊNE</div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </>
    
   )
}
}
export default Plaque;