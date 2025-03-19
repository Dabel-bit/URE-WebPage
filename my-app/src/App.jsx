import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Pages/Home";
import { Valores } from "./Pages/Valores";
import { Contacto } from "./Pages/Contacto";
import { Equipo } from "./Pages/Equipo";
import { Ubicacion } from "./Pages/Ubicacion";
import { Formulario } from "./Pages/Formulario";

import './App.css'

export const App = () => {

  return (
    <BrowserRouter basename="/URE-WebPage">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="equipo" element={<Equipo />} />
          <Route path="valores" element={<Valores />} />
          <Route path="ubicacion" element={<Ubicacion />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="formulario" element={<Formulario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}