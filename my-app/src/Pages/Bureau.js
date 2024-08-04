import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React , { useState } from 'react';
import './similateur.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../component/Footer";
import img0 from '../imgs/similateur/M1.jpg';
import img1 from '../imgs/similateur/M2.jpg';
import img2 from '../imgs/similateur/M3.jpg';
import img3 from '../imgs/similateur/M4.jpg';
import img4 from '../imgs/similateur/M5.jpg';
import img5 from '../imgs/similateur/M6.jpg';
import img6 from '../imgs/similateur/M7.jpg';
import img7 from '../imgs/similateur/M8.jpg';
import img8 from '../imgs/similateur/M9.jpg';
import img9 from '../imgs/similateur/M10.jpg';
import img10 from '../imgs/similateur/M11.jpg';
import img11 from '../imgs/similateur/M12.jpg';
import img12 from '../imgs/similateur/aze.jpg';
import img13 from '../imgs/similateur/M13.jpg';
import img14 from '../imgs/similateur/pp.jpg';
import img15 from '../imgs/similateur/M15.jpg';
import img16 from '../imgs/similateur/M17.jpg';
import img17 from '../imgs/similateur/M18.jpg';
import img18 from '../imgs/similateur/v2.jpg';
import img19 from '../imgs/similateur/v1.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import {BsFillArrowLeftSquareFill } from "react-icons/bs";
function Habilagemurale() {
    const imgs=[
        {id:0,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-F6260",title: " ORIENTAL WHITE",},
        {id:1,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-F2195" ,  title: "OXID 02 FOREST", },
        {id:2,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-F2278", title: "VENICE 2222",},
        {id:3,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M6284", title: "CHENE TISSE 1589",},
        {id:4,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M2511" ,  title: "TROIA WALNUT NM M2511",},
        {id:5,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-F6261" ,  title: " MARBRE MEGASTONE GRIS",},
        {id:6,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M6322" ,  title: " QUERCUS EN 438 ",},
        {id:7,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M850" ,  title: " NOYER 53600",},
        {id:8,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M6251" ,  title: "CHENE BROSSE 1797",},
        {id:9,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M6285" ,  title: "INFLUENCE K42",},
        {id:10,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M6318",  title: "HITECK 511",},
        {id:11,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-M6317",  title: "CHENE 73800",},
        {id:12,value:"https://shop.holz-mayrhofer.de/Images/318895.jpg",  title: "IMPERIAL WALNUT M6293",},   
        {id:13,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=F76FF3FB0BA120A3CE4F330B689ACDBA?id=Sonae+Arauco_SonaeArauco-F2282",  title: "MATT CASHMERE GOLD 384",},
        {id:14,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=F76FF3FB0BA120A3CE4F330B689ACDBA?id=Sonae+Arauco_SonaeArauco-M6306",  title: "FRENE DESIRA 1851",},
        {id:15,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=F76FF3FB0BA120A3CE4F330B689ACDBA?id=Sonae+Arauco_SonaeArauco-M6300",  title: " SAPELLI 003 ",}, 
        {id:16,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=3ABB7B2B9C8193243EB5210B0B2B5A62?id=Sonae+Arauco_SonaeArauco-F2279",  title:"FOND MARBRE GRIS"},  
        {id:17,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=F76FF3FB0BA120A3CE4F330B689ACDBA?id=Sonae+Arauco_SonaeArauco-F2275",  title: "PIETRA 665",}, 
        {id:18,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=F76FF3FB0BA120A3CE4F330B689ACDBA?id=Sonae+Arauco_SonaeArauco-F2284",  title: "GRAIN DE BOIS 207",}, 
        {id:19,value:"https://sonaearauco.esignserver3.com/texture;jsessionid=F76FF3FB0BA120A3CE4F330B689ACDBA?id=Sonae+Arauco_SonaeArauco-M6293",  title: "IMPeERIAL WALUNT",},
    ];
    const imgs1=[
        {id:0,value:img0},
        {id:1,value:img1},
        {id:2,value:img2},
        {id:3,value:img3},
        {id:4,value:img4},
        {id:5,value:img5},
        {id:6,value:img6},
        {id:7,value:img7},
        {id:8,value:img8},
        {id:9,value:img9},
        {id:10,value:img10},
        {id:11,value:img11},
        {id:12,value:img12},
        {id:13,value:img13},
        {id:14,value:img14},
        {id:15,value:img15},
        {id:16,value:img16},
        {id:17,value:img17},
        {id:18,value:img18},
        {id:19,value:img19},
    ];
    const [sliderData,setsliderData]=useState(imgs1[0])
    const prevSlide = () => {
        if(sliderData !== sliderData.length){
            setsliderData(imgs1[sliderData.id + 1])
            console.log(sliderData);
            console.log("hani lena fi loula")
        }
        else if (sliderData === sliderData.length){
            setsliderData(0)
            console.log("hani lena fi thenia")
        }
    }
    const handleClick=(index)=>{
        console.log(index);
        const slider=imgs1[index];
        setsliderData(slider);
    }
    return (
        <>
            <container >
                <div className="similateur">
               <div className="image" data-aos="flip-left" data-aos-duration="2000">
               <img   className="image-smilateur" src={sliderData.value}  />
               <div className="thumbnail" >
                     </div>
                     
                     
                    
                     <div className="box">
                    <div className='flex_row'>
                    <div className="Arrow-left">
                    <BsFillArrowLeftSquareFill onClick={prevSlide}/>
                    </div>
                        {imgs.map((data,i)=>
                            <div className="thumbnail" key={i} data-aos="zoom-in" data-aos-duration="3000">
                                <div className="Box">
                                <img key={data.id} src={data.value} alt={data.title} onClick={()=>handleClick(i)} height="150" width="150"  />
                                <div className="Box">
                                <h1>{data.title}</h1>
                                </div>
                            <div className="thumbnail-bottom>"></div>
                            </div>
                        </div>
                    )}
                    <div className="Arrow-Right">
                    <BsFillArrowRightSquareFill onClick={prevSlide}/>
                    </div>
                    </div>
                </div>
               </div>
               </div>
            </container>
            <Footer/>
        </>
    );
    }
export default Habilagemurale;