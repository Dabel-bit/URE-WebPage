//import { FaInstagram } from 'react-icons/fa';
import '../Styles/Footer.css'

let getCurrentYear = () => new Date().getFullYear();

export const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="first-container">
          <div className="text-container">
            <p className='instagram-link'>
            </p>
            <p>
              <a href="https://www.instagram.com/unrincondelencuentro/" color="black">
                  @unrincondelencuentro 
              </a>
            </p>                    
            <p>
                        +569 9999 9999 
            </p>
            <p>
                        Un Rincón del Encuentro&#174; 
            </p>
            <p>
                        { getCurrentYear() }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}