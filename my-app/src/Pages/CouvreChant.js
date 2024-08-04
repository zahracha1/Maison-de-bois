import React, { Component } from "react";
import photo from'../imgs/Produit/produit8.png'
import './page.css'
import ch1 from '../imgs/couleur/couvrechant/c1.jpg'
import ch2 from '../imgs/couleur/couvrechant/c2.jpg'
import ch3 from '../imgs/couleur/couvrechant/c3.jpg'
import ch4 from '../imgs/couleur/couvrechant/c4.jpg'
import ch5 from '../imgs/couleur/couvrechant/c5.jpg'
import ch6 from '../imgs/couleur/couvrechant/c6.jpg'
import ch7 from '../imgs/couleur/couvrechant/c7.jpg'
import ch8 from '../imgs/couleur/couvrechant/c8.jpg'
import ch9 from '../imgs/couleur/couvrechant/c9.jpg'
import ch10 from '../imgs/couleur/couvrechant/c10.jpg'
import ch11 from '../imgs/couleur/couvrechant/c11.jpg'
import ch12 from '../imgs/couleur/couvrechant/c12.jpg'
import ch13 from '../imgs/couleur/couvrechant/c13.jpg'
import ch14 from '../imgs/couleur/couvrechant/c14.jpg'
import ch15 from '../imgs/couleur/couvrechant/c15.jpg'
import ch16 from '../imgs/couleur/couvrechant/c16.jpg'
import ch17 from '../imgs/couleur/couvrechant/c17.jpg'
import ch18 from '../imgs/couleur/couvrechant/c18.jpg'
import Footer from "../component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

class CouvreChant extends Component {
    
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

           <section className="Produit" >
               <div className="left"  data-aos="fade-down">
                 < h1 className="titre" > Couvre Chant</h1>
                 <p className="text"> Afin de garantir une finition impeccable à son produit, MBM présente pour toute sa gamme de produits leurs couvre chant respectifs.<br/>Notre gamme de couvre chant, le complément indispensable pour le placage des chants des panneaux mélaminés et plaqués.</p>
                 <div class="container">
                  <button type="button" class="btn" data-toggle="modal" data-target="#myModal">
                     Format
                  </button>
                  <div class="modal fade" id="myModal" >
                     <div className="modal-dialog modal-xl"  >
                        <div class="modal-content">
                           <div class="modal-header">
                              <h4 class="modal-title">format</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                           </div>
                           <div class="modal-body">
                              <table className="table table-bordered table-sm">
                                <tbody>
                                 <tr>
                               
                                  <td rowspan="2" width="12%"><strong>Épaisseur</strong></td>
                                  <td width="12%"><strong>0.4mm</strong></td>
                                  <td width="12%"><strong>0.5mm</strong></td>
                                   <td width="11%"><strong> 1mm</strong></td>
                                   <td width="11%"><strong> 2mm</strong></td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                               
                               <td rowspan="2" width="12%"><strong>Largeur</strong></td>
                               <td  colSpan="4" width="12%"><strong> de 18 à 50mm</strong></td>
                               
                                </tr>
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
                  <img src={ch1} width="300" height="200"/>
                  <div className="des">LAS_7212</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch2}  width="300" height="200"/>
                  <div className="des"> LAS_7256</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch3}  width="300" height="200"/>
                  <div className="des">lAS_7269</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch4}  width="300" height="200"/>
                  <div className="des">CC BLEU 380</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch5}  width="300" height="200"/>
                  <div className="des">CC GRIS 208</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch6}  width="300" height="200"/>
                  <div className="des">CC GRIS 214</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch7}  width="300" height="200"/>
                  <div className="des">CC ROSE 356</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch8}  width="300" height="200"/>
                  <div className="des">CC ROUGE 355</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch9}  width="300" height="200"/>
                  <div className="des">CC ROUGE 519</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch10}  width="300" height="200"/>
                  <div className="des">LAS_7291</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch11}  width="300" height="200"/>
                  <div className="des">LAS_7303</div>
                  </div>
               </div>
            </div>
            <div className="responsive"data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch12}  width="300" height="200"/>
                  <div className="des">LAS_7321</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch13}  width="300" height="200"/>
                  <div className="des">CC Marbré 008</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch14}  width="300" height="200"/>
                  <div className="des">CC Marbré 009</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch15}  width="300" height="200"/>
                  <div className="des">CC Orange 361</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch16}  width="300" height="200"/>
                  <div className="des">LAS_7336</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch17}  width="300" height="200"/>
                  <div className="des">LAS_7351</div>
                  </div>
               </div>
            </div>
            <div className="responsive" data-aos="fade-up">
               <div className="gallary">
                  <div className="box-gallery">
                  <img  src={ch18}  width="300" height="200"/>
                  <div className="des">LAS_7370</div>
                  </div>
               </div>
            </div>

         </section>
      <Footer/>
        </>
    
    )
}
}
export default CouvreChant;