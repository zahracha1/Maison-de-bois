import React from "react";
import './produit.css';

import { Link } from "react-router-dom";


import photo from '../imgs/Produit/produit1.jpg'
import photo1 from '../imgs/Produit/produit2.jpg'
import photo2 from '../imgs/Produit/produit3.png'
import photo3 from '../imgs/Produit/produit6.jpg'

import './produit.css'



const Produit=()=>{
  
  return (
    <>

     <section>
     <div class="container">
     
    <div class="gallery-container w-1 h-1 ">
      <div class="gallery-item">
        
        <Link to={'/Plaque'}>
        <div class="image">
          <img src={photo}alt="nature"/>
        </div>
        <div class="text">Plaqué</div>
        </Link>
      </div>
    </div>
    <div class="gallery-container  w-2 h-2">
      <div class="gallery-item">
        <Link to={"/CouvreChant"}>
        <div class="image">
          <img src={photo1}alt="nature"/>
        </div>
        <div class="text"> Couvre Chant</div>
        </Link>
      </div>
    </div>
    <div class="gallery-container w-2  h-1">
      <div class="gallery-item">
        <Link to={"/Higlosee"}>
        <div class="image">
          <img src={photo2}alt="nature"/>
        </div>
        <div class="text">HIgh_glosse</div>
        </Link>
      </div>
    </div>
    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <Link to={'/Melamine'}>
        <div class="image">
          <img src={photo3}alt="nature"/>
        </div>
        <div class="text">Melaminé</div>
        </Link>
      </div>
    </div>
  </div>
     </section>
    
  
    </> 
  )

     
    
};
export default Produit

