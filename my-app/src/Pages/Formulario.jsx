import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import logo1 from '../Images/LogoUre.png'
import '../Styles/Formulario.css'

export const Formulario = () => {

    const [size, setSize] = useState("20vw");

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth < 768 ? "40vw" : "20vw");
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //const maxSize = Math.min(parseInt(size), 15);

    return (
        <>
        <div>
            <div className="base-1"></div>
            <div className="general-container">
                <div className='img-container'>
                    <img src={ logo1 } style={{ maxWidth: size, height: "auto" }} />
                </div>
                <div className="text-container">
                    <div className="contender">
                        <div>
                            <div>
                                <h2>¡BIENVENIDX!</h2>
                            </div>
                        <br />
                        <div>

                        </div>
                            <h3 className="h3-formulario">
                                Un Rincón del Encuentro está compuesto por psicólogas que 
                                buscan entregar un espacio psicoterapéutico seguro para 
                                las personas, desde un enfoque afirmativo y de género. 
                                Por lo mismo, el presente formulario busca recabar 
                                información personal con el fin de visualizar inicialmente 
                                el malestar de cada consultante y con ello ponernos en 
                                contacto para otorgar la atención requerida.
                            <br></br>
                                Por otra parte, toda información aquí recabada es de 
                                carácter confidencial y solo será utilizada para los fines 
                                antes mencionados. Una vez enviada la información nos 
                                pondremos en contacto a la brevedad a través del número 
                                que facilitaste, para conversar sobre la posibilidad de 
                                agendar una sesión inicial con alguna de nuestras 
                                profesionales.
                            <br></br>
                                Si tienes alguna consulta puedes escribirnos a nuestro correo:&nbsp;   
                                <a
                                  href="mailto:unrincondelencuentro@gmail.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: '#41b79f'}}
                                >
                                   unrincondelencuentro@gmail.com
                                </a>
                            </h3>
                            <div className='btn-us'>
                                
                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc-Tc8eP4tdGjB3qqyuYJCe1JZ7XRXeFl_LDRkQNML0MkaFSw/viewform" 
                                className='btn'
                                target="_blank"
                                rel="noopener noreferrer">Formulario de Atención General</Link>
                                
                            </div>
                            <div className='btn-us'>
                                
                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLScATSkpGAzmaRRnwm1mtTa_LJKSRR7xxoHo3El6MWGFxSmK8Q/viewform" 
                                className='btn'
                                target="_blank"
                                rel="noopener noreferrer">Formulario de Arancel Diferencial</Link>
                                
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="base-2"></div>
        </div>
        </>
    )
}