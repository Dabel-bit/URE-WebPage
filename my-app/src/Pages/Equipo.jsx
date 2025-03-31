import { useState } from 'react';
import '../Styles/Equipo.css';
import { terapeutas } from '../Components/Terapeutas';

export const Equipo = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [terapeutaSeleccionado, setTerapeutaSeleccionado] = useState(null);

  const abrirModal = (terapeuta) => {
      setTerapeutaSeleccionado(terapeuta);
      setModalAbierto(true);
  };

  const cerrarModal = () => {
      setModalAbierto(false);
      setTerapeutaSeleccionado(null);
  };

  return (
      <div className="equipo-container">
        <h2>NUESTRO EQUIPO</h2>
        <div className="tarjetas-container">
            {terapeutas.map((terapeuta, index) => (
                <div key={index} className="tarjeta">
                    <img src={terapeuta.imagen} alt={terapeuta.nombre} className="foto-terapeuta" />
                    <h3>{terapeuta.nombre}</h3>
                    <p>{terapeuta.cargo}</p>
                    <button onClick={() => abrirModal(terapeuta)} className="btn">Ver perfil</button>
                </div>
            ))}
        </div>
        {/* Modal */}
        {modalAbierto && terapeutaSeleccionado && (
            <div className="modal">
                <div className="modal-contenido">
                    <span className="cerrar" onClick={cerrarModal}>&times;</span>
                    <img src={terapeutaSeleccionado.imagen} alt={terapeutaSeleccionado.nombre} className="foto-modal" />
                    <h3>{terapeutaSeleccionado.nombre}</h3>
                    <p>{terapeutaSeleccionado.especialidad}</p>
                    <p>{terapeutaSeleccionado.descripcion}</p>
                </div>
            </div>
        )}
      </div>
    );
  };