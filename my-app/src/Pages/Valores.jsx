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
              <h2>Valores:</h2>            </div>
              <div>
                <ul>
                  <li style={{ display: 'inline-block', marginRight: '20px' }}><strong>Fonasa:</strong> $25.000 por sesión.</li>
                  <br />
                  <li style={{ display: 'inline-block', marginRight: '20px' }}><strong>Isapre o Particular:</strong> $35.000 por sesión.</li>
                  <br />
                  <li style={{ display: 'inline-block', marginRight: '20px' }}><strong>Diferencial:</strong> $20.000 a $22.000 por sesión.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="bajo"></div>
    </div>
  );
}