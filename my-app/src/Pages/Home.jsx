import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import logo1 from '../Images/LogoUre.png'
import '../Styles/Home.css'

export const Home = () => {

    const [size, setSize] = useState("35vw");

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth < 1000 ? "30vw" : "30vw");
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxSize = Math.min(parseInt(size), 15);

    return (
        <>
        <div>
            <div className="general-container">
                <div className='img-container'>
                    <img src={ logo1 } style={{ maxWidth: `${maxSize}vw`, height: "auto" }} />
                </div>
                <div className="text-container">
                    <div className="contender">
                        <div>
                            <div>
                                <h2>Centro psciologico</h2>
                                <h2><b>Un rincon del encuentro</b></h2>
                            </div>
                        <br />
                        <div>

                        </div>
                            <h3>Somos un colectivo de psicólogas feministas que 
                                buscan entregar un espacio seguro de atención desde 
                                un enfoque de género y con especialidad en temáticas
                                 LGBTIAQ+ en Chile.
                            <br></br>
                            Trabajamos a nivel de atención de la infancia, la 
                            juventud y la adultez, donde ofrecemos un espacio 
                            terapéutico centrado en las necesidades de cada paciente, 
                            comprendiendo su historia, su contexto y su cultura.
                            Nuestro objetivo es generar procesos psicoterapéuticos 
                            y promover el bienestar integral de la salud mental.
                            </h3>
                            <div className='btn-us'>
                                <a className='btn'>
                                <Link to="/equipo" className='btn'>Conoce a nuestras psicólogas</Link>
                                </a>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="base"></div>
        </div>
        </>
    )
}