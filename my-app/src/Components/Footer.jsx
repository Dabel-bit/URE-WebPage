//import { FaInstagram } from 'react-icons/fa';
import '../Styles/Footer.css'

//let getCurrentYear = () => new Date().getFullYear();

export const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(135deg, #fff7db 0%, #41b79f 70%, rgba(255,255,255,0) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
    textAlign: 'center',
  };

  const paragraphStyle = {
    margin: 0,
    fontFamily: 'sans-serif',
    fontSize: '16px',
  };

  return (
    <div style={footerStyle}>
      <p style={paragraphStyle}>&copy; 2025 Un Rincón del Encuentro&reg;</p>
    </div>
  );
};