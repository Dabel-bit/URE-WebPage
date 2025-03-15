import { Link } from 'react-router-dom'

import '../Styles/Menu.css'

export const Menu = () => {
  return (
      <>
        <div className='menu-container'>
          <div className='menu-buttons'>
            <button className='btn-menu'>
                <Link to="/" className='btn-menu'>Inicio</Link>
            </button>
          </div>
					<div className='menu-buttons'>
            <button className='btn-menu'>
            	<Link to="/equipo" className='btn-menu'>Equipo</Link>
            </button>
          </div>
          <div className='menu-buttons'>
            <button className='btn-menu'>
            <Link to="/valores" className='btn-menu'>Valores</Link>
            </button>
          </div>
					<div className='menu-buttons'>
            <button className='btn-menu'>
            	<Link to="/ubicacion" className='btn-menu'>Ubicación</Link>
            </button>
          </div>
          <div className='menu-buttons'>
            <button className='btn-menu'>
            <Link to="/contacto" className='btn-menu'>Contacto</Link>
            </button>
          </div>
					<div className='menu-buttons'>
            <button className='btn-menu'>
            	<Link to="/formulario" className='btn-menu'>Formulario</Link>
            </button>
          </div>
        </div>
      </>
  );
}