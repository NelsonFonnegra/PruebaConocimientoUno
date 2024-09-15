import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import SectionUno from "./Componentes/SectionUno";
import SectionDos from "./Componentes/SectionDos";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Main />
    <SectionUno />
    <SectionDos />
  </StrictMode>
);
