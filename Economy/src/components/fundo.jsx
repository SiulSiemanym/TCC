import React from 'react';
import Css from '../Css/fundo.module.css'; // Importa o CSS
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg"

const BackgroundImage = ({ children }) => {
  return (
    <div style={{ backgroundImage: `url(${back})` }} className={Css.backgroundimage}>
      {children}
    </div>
  );
};

export default BackgroundImage;
