import React from 'react';
import { useState, useEffect } from "react";

import logo1 from '../Images/LogoUre.png'
import '../Styles/Valores.css'

export const Valores = () => {
  const [size, setSize] = useState("20vw");
  
  useEffect(() => {
      const handleResize = () => {
          setSize(window.innerWidth < 768 ? "40vw" : "20vw");
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div>
      <div className="base-1"></div>
      <div className='general-container'>
        <div className='img-container'>
          <img src={ logo1 } style={{ maxWidth: size, height: "auto" }} />
        </div>
        <div className='text-container'>
          <div className='contender'>
            <div>
              <h2>VALORES</h2>
            </div>
            <div className="tarjetas-valores-container">
              <div className='tarjeta-valores'>     
                <h3>FONASA</h3>
                <h4>$25.000 por sesión.</h4>     
              </div>
              <div className='tarjeta-valores'>   
                <h3>ISAPRE O PARTICULAR</h3>  
                <h4>$35.000 por sesión.</h4>   
              </div>
              <div className='tarjeta-valores'>
                <h3>DIFERENCIAL</h3>    
                <h4>$20.000 o $22.000 por sesión.</h4>    
              </div>
              </div>
            </div>
          </div>
        </div>
      <div id="bajo"></div>
    </div>
  );
}