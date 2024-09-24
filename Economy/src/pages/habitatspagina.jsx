import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Acss from '../Css/animais.module.css';
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Lupa from "../assets/Imagens/Animais/lupa.png";
import Tabela from "../components/criarelementotabela";
import { habitats } from "../constants/habitats"
import Menu from "../components/menu"
import { useState } from "react";
import Habitat from "../components/habitatconteudo";
import Pé from "../components/footer"
import { animais } from "../constants/animais";


export default function HabitatPagina(){
  const [consulta, setConsulta] = useState("")
    const param = useParams()
    console.log(param.nome)
    const animal  = habitats.find(animal => animal.link == param.nome) ?? habitats[0]
    
    return(
        <>
        <Helmet><title>Catálogo Habitats</title></Helmet>
        <Menu ativo={"habitats"}/>
        <div className={`${Acss.backgroundimage}`} style={{ backgroundImage:`url(${back})` }} >
        
                       
          <Habitat Imagem1={animal.Imagem1}  Imagem2={animal.Imagem2}  Imagem3={animal.Imagem3} Metadenome1={animal.Metadenome1 }  Metadenome2={animal.Metadenome2 } textointrodutorio={animal.textointrodutorio} Extensao={animal.extensao} Motivo={animal.Motivo}/>

        <Pé />
        </div>
      </>
        
    )
}