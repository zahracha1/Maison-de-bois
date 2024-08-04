import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router , Route, Routes, } from "react-router-dom";

import About from "./Pages/About";
import Produit from "./Pages/Produit";
import Higlosee from "./Pages/Higlosee";
import Plaque from "./Pages/Plaque";
import Navv from "./component/Nav";
import Similateur from "./Pages/Similateur";
import Home from "./Pages/Home"
import Melamine from "./Pages/Melamine";
import CouvreChant from "./Pages/CouvreChant";
import Cuisine from "./Pages/Cuisine";
import Habilagemurale from "./Pages/Habilagemurale";
import Meueblesalledebain from "./Pages/Meueblesalledebain";
import Contact from "./component/Contact";
import Bureau from "./Pages/Bureau";

function  App() {
  return(
    <Router>
      <Navv />
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Produit' element={<Produit/>}></Route>
        <Route path="/Similateur" element={<Similateur/>}></Route>
        <Route path="/Cuisine" element={<Cuisine/>}></Route>
        <Route path="/Habillagemurale" element={<Habilagemurale/>}></Route>
        <Route path="/Meublesalledebain" element={<Meueblesalledebain/>}></Route>
        <Route path="/Bureau"element={<Bureau/>}></Route>
        
     
        <Route path="/Higlosee" element={<Higlosee/>}></Route>
        <Route path="/plaque" element={<Plaque/>}></Route>
        <Route path="/Melamine" element={<Melamine/>}></Route>
        <Route path="/CouvreChant" element={<CouvreChant/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>

       
      </Routes>
  
     </Router>
  
      
     
      
    

  )
}

export default App;
