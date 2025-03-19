import { MapComponent } from "../Components/MapComponent";
import '../Styles/Ubicacion.css'

export const Ubicacion = () => {
    return (
        <>
            <div>
              <div className="base-1"></div>
              <div className='generalmap-container'>
                <div className='textmap-container'>
                  <div className='mapcontender'>
                  <h2>Ubicación</h2>
                  <h3>Luis Thayer Ojeda 073, Providencia. RM.
                    <br/>
                  </h3>
                  <p>
                  <a 
                  href="https://maps.app.goo.gl/Pp8aakQ4LJmejiVd9" 
                  target="_blank"
                  style={{ color: '#41b79f'}}>
                    Abrir en Google Maps
                    </a>
                  </p>
                  </div>
                </div>
                  <div className="map-container">
                      <MapComponent/>
                    </div>
                  </div>
                </div>
        </>
    )
  };