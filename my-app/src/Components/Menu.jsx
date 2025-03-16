import { Link } from 'react-router-dom'
import { useState } from "react";

import '../Styles/Menu.css'

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <div className='menu-buttons'>
          <button className='btn-menu'>
              <Link to="/" className='btn-menu' onClick={() => setIsOpen(false)}>Inicio</Link>
          </button>
        </div>
				<div className='menu-buttons'>
          <button className='btn-menu'>
          	<Link to="/equipo" className='btn-menu' onClick={() => setIsOpen(false)}>Equipo</Link>
          </button>
        </div>
        <div className='menu-buttons'>
          <button className='btn-menu'>
          <Link to="/valores" className='btn-menu' onClick={() => setIsOpen(false)}>Valores</Link>
          </button>
        </div>
				<div className='menu-buttons'>
          <button className='btn-menu'>
          	<Link to="/ubicacion" className='btn-menu' onClick={() => setIsOpen(false)}>Ubicación</Link>
          </button>
        </div>
        <div className='menu-buttons'>
          <button className='btn-menu'>
          <Link to="/contacto" className='btn-menu' onClick={() => setIsOpen(false)}>Contacto</Link>
          </button>
        </div>
				<div className='menu-buttons'>
          <button className='btn-menu'>
          	<Link to="/formulario" className='btn-menu' onClick={() => setIsOpen(false)}>Formulario</Link>
          </button>
        </div>
      </div>
    </>
  );
}