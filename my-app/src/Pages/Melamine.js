import React, { Component } from "react";
import photo from'../imgs/Produit/07.jpg'
import './page.css'
import { Link } from "react-router-dom";
import m1 from '../imgs/couleur/Melaminé/m1.jpg'
import m2 from '../imgs/couleur/Melaminé/m2.jpg'
import m3 from '../imgs/couleur/Melaminé/m3.jpg'
import m4 from '../imgs/couleur/Melaminé/m4.jpg'
import m5 from '../imgs/couleur/Melaminé/m5.jpg'
import m6 from '../imgs/couleur/Melaminé/m6.jpg'
import m7 from '../imgs/couleur/Melaminé/m7.png'
import m8 from '../imgs/couleur/Melaminé/m8.png'
import m9 from '../imgs/couleur/Melaminé/m9.jpg'
import m10 from '../imgs/couleur/Melaminé/m10.png'
import m11 from '../imgs/couleur/Melaminé/m11.jpg'
import m12 from '../imgs/couleur/Melaminé/m12-2.jpg'
import m13 from '../imgs/couleur/Melaminé/m12.jpg'
import m14 from '../imgs/couleur/Melaminé/m13.jpg'
import m15 from '../imgs/couleur/Melaminé/m14.jpg'
import m16 from '../imgs/couleur/Melaminé/m15.jpg'
import m17 from '../imgs/couleur/Melaminé/m16.jpg'
import m18 from '../imgs/couleur/Melaminé/m17.jpg'
import m19 from '../imgs/couleur/Melaminé/m18.png'
import m20 from '../imgs/couleur/Melaminé/m21.png'
import m21 from '../imgs/couleur/Melaminé/m22.jpg'
import m22 from '../imgs/couleur/Melaminé/m23.jpg'
import m23 from '../imgs/couleur/Melaminé/m24.jpg'
import m24 from '../imgs/couleur/Melaminé/m25.png'
import m25 from '../imgs/couleur/Melaminé/m26.jpg'
import m26 from '../imgs/couleur/Melaminé/m27.png'
import m27 from '../imgs/couleur/Melaminé/m28.jpg'
import m28 from '../imgs/couleur/Melaminé/m29.jpg'
import m29 from '../imgs/couleur/Melaminé/m30.jpg'
import m30 from '../imgs/couleur/Melaminé/m31.jpg'
import m31 from '../imgs/couleur/Melaminé/m32.jpg'
import m32 from '../imgs/couleur/Melaminé/m33.jpg'
import m33 from '../imgs/couleur/Melaminé/m34.jpg'
import Footer from "../component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';



class Melamine extends Component  {
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
               <div className="left"  data-aos="fade-down">
                  < h1 className="titre" >Panneau Mélaminé</h1>
                  <p className="text">Un papier décoratif imprégné de résine mélamine sous une panoplie de couleurs et décors qui vient revêtir un panneau MDF ou particule sur 1 ou 2 faces par pressage à chaud avec des finitions allant de l’Ultra Mat au Mat,<br/> Peau d’Orange, Structure Bois, Line Wood jusqu’à la finition synchronisée (imitation intégrale du bois naturel).
                  <br/> Le panneau ainsi obtenu est prêt pour la confection en meuble contemporain et tout type d’agencement.</p>
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
                                     <th rowspan="2" width="86"><strong>Supports</strong></th>
                                     <th rowspan="2" width="86"><strong>Épaisseurs</strong></th>
                                     <th colspan="5" width="432"><strong>Dimensions</strong></th>
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
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                      <td width="86"><strong>8</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                      <td width="86"><strong>10</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                      <td width="86"><strong>12</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                     <td width="86"><strong>16</strong></td>
                                     <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                     <td width="86"><strong>✓</strong></td>
                                     <td width="86"><strong></strong></td>
                                     <td width="86"><strong>✓</strong></td>
                                    </tr>
                                    <tr>
                                      <td width="86"><strong>18</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                     <td width="86"><strong>✓</strong></td>
                                    </tr>
                                    <tr>
                                      <td width="86"><strong>22</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong>✓</strong></td>
                                      <td width="86"><strong></strong></td>
                                      <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                       <td width="86"><strong>25</strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong>✓</strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                       <td width="86"><strong>30</strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong>✓</strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong></strong></td>
                                    </tr>
                                    <tr>
                                       <td rowspan="2" width="86"><strong>MDF super light</strong></td>
                                       <td width="86"><strong>15</strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong>✓</strong></td>
                                       <td width="86"><strong></strong></td>
                                       <td width="86"><strong></strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>18</strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>MDF Hydrofuge</strong></td>
                                          <td width="86"><strong>18</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>

                                       <tr>
                                          <td rowspan="6" width="86"><strong>Particule</strong></td>
                                          <td width="86"><strong>16</strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>18</strong></td>
                                           <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>19</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>22</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>25</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>
                                       <tr>
                                          <td width="86"><strong>30</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong>✓</strong></td>
                                          <td width="86"><strong></strong></td>
                                          <td width="86"><strong></strong></td>
                                       </tr>
                                       <div class="modal-footer">
                                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                       </div>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right"  data-aos="fade-down">
                  <img  className="photo" src={photo} alt=''/>
               </div>
              

            </section>
            <section >

            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img src={m1} width="300" height="200"/>
                  <div className="des">Stone Gris 651</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box--gallery">
                  <img  src={m2}  width="300" height="200"/>
                  <div className="des">white luna 666</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m3}  width="300" height="200"/>
                  <div className="des">Peitra 665</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up" >
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m4}  width="300" height="200"/>
                  <div className="des">Marbré 008</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m5}  width="300" height="200"/>
                  <div className="des"> BLACK Luna 667</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m6}  width="300" height="200"/>
                  <div className="des">Emperdor 009</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m7}  width="300" height="200"/>
                  <div className="des">Frene desira 393</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m8}  width="300" height="200"/>
                  <div className="des">Merisier 511</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m9}  width="300" height="200"/>
                  <div className="des">Missoui 638</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m10}  width="300" height="200"/>
                  <div className="des">Noyer adrano 650</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m11}  width="300" height="200"/>
                  <div className="des">Noyer 642</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m12}  width="300" height="200"/>
                  <div className="des">Noyer Tropical 671</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m13}  width="300" height="200"/>
                  <div className="des">Rouge 519</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m14}  width="300" height="200"/>
                  <div className="des">Vert 363</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m15}  width="300" height="200"/>
                  <div className="des">Rouge 335</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m16}  width="300" height="200"/>
                  <div className="des">Rose fuchia 109</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m17}  width="300" height="200"/>
                  <div className="des">Rose 356</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m18}  width="300" height="200"/>
                  <div className="des">Beige 212</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m19}  width="300" height="200"/>
                  <div className="des">Chene 525</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m20}  width="300" height="200"/>
                  <div className="des"> Chene 627 </div>
                  </div>
               </div>
            </div>   <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m21}  width="300" height="200"/>
                  <div className="des">chene 628</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m22}  width="300" height="200"/>
                  <div className="des">   chene 641</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m23}  width="300" height="200"/>
                  <div className="des">Chene 396</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m24}  width="300" height="200"/>
                  <div className="des">Chene 397</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m25}  width="300" height="200"/>
                  <div className="des">Bleu 380</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m26}  width="300" height="200"/>
                  <div className="des">Bleu 410</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m27}  width="300" height="200"/>
                  <div className="des">Jaune 387</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m28}  width="300" height="200"/>
                  <div className="des"> Gris 208</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m29}  width="300" height="200"/>
                  <div className="des"> Noir 209</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m30}  width="300" height="200"/>
                  <div className="des"> Gris 214</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m31}  width="300" height="200"/>
                  <div className="des"> Picadelly</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m32}  width="300" height="200"/>
                  <div className="des"> Immerol 615</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={m33}  width="300" height="200"/>
                  <div className="des">Horizon 669</div>
                  </div>
               </div>
            </div>
         
         </section>
         <Footer/>
      </>
    
    )
}
}
export default Melamine;