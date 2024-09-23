import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Acss from '../Css/animais.module.css';
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Lupa from "../assets/Imagens/Animais/lupa.png";
import Tabela from "../components/criarelementotabela";

import Menu from "../components/menu"
import { useState } from "react";
import Pé from "../components/footer"
import { animais } from "../constants/animais";
import Animal from "../components/animalconteudo";


export default function AnimalPagina(){
  const [consulta, setConsulta] = useState("")
    const param = useParams()
    console.log(param.nome)
    const animal  = animais.find(animal => animal.link == param.nome) ?? animais[0]
    
    return(
        <>
        <Helmet><title>Catálogo Animais</title></Helmet>
        <Menu ativo={"animais"}/>
        <div className={`${Acss.backgroundimage}`} style={{ backgroundImage:`url(${back})` }} >
        
                       
          <Animal Imagem1={animal.Imagem1}  Imagem2={animal.Imagem2}  Imagem3={animal.Imagem3} Metadenome1={animal.Metadenome1 }  Metadenome2={animal.Metadenome2 } textointrodutorio={animal.textointrodutorio} Populacao={animal.Populacao} Motivo={animal.Motivo}/>

        <Pé />
        </div>
      </>
        
    )
}