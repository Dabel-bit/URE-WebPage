import React from 'react';
import { useState, useEffect } from "react";

import logo1 from '../Images/LogoUre.png'
import '../Styles/Contacto.css'


export const Contacto = () => {
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
      <div className='generalcontact-container'>
        <div className='img-container'>
          <img src={ logo1 } style={{ maxWidth: size, height: "auto" }} />
        </div>
        <div className='textcontact-container'>
          <div className='textcontender'>
                <div>
                    <h2 style={{ display: 'inline-block', marginRight: '70px' }}>Contacto</h2>            
                    </div>
                <div>
                <div>
                <ul style={{ whiteSpace: 'nowrap' }}>
                  <li>
                    <strong>Correo: </strong> 
                    <a
                      href="mailto:unrincondelencuentro@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#41b79f'}}
                    >
                      unrincondelencuentro@gmail.com
                    </a>
                    </li>
                  <li>
                    <strong>Síguenos en Instagram: </strong>
                    <a
                      href="https://www.instagram.com/unrincondelencuentro"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#41b79f'}}
                    >
                      @unrincondelencuentro
                    </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bajo"></div>
    </div>
  );
}