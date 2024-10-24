import { Helmet } from "react-helmet"; 
import { useParams } from "react-router-dom"; 
import Animal from "../components/animalconteudo"; 
import Habitat from "../components/habitatconteudo"; 
import { useEffect } from "react"; 
import useRequisitar from "../hooks/useRequisitar"; 
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg"; 
import Menu from "../components/menu"; 
import Pé from "../components/footer"; 
import css from '../Css/animais.module.css';

export default function AnimalPagina() { 
  const { nome } = useParams(); 
  const [animal, carregando] = useRequisitar("economy/item/find/" + nome); 

  if (carregando) { 
    return <div>Carregando...</div>; 
  } 

  const categoria = nome ? "Animal" : "Habitat"; 

  return ( 
    <> 
      <Helmet><title>{animal?.nome}</title></Helmet> 
      <Menu ativo={categoria === "Animal" ? "animais" : "habitats"} /> 
      <div style={{ backgroundImage: `url(${back})` }} className={`${css.backgroundimage}`}> 
        {categoria === "Habitat" ? ( 
          <Habitat 
            Imagem1={animal.Imagem1} 
            Imagem2={animal.Imagem2} 
            Imagem3={animal.Imagem3} 
            Metadenome1={animal.Metadenome1} 
            Metadenome2={animal.Metadenome2} 
            textointrodutorio={animal.textointrodutorio} 
            Populacao={animal.populacao} 
            Motivo={animal.motivo} 
            link={animal.nome}
            /> 
        ) : ( 
          <Animal 
            Imagem1={animal.Imagem1} 
            Imagem2={animal.Imagem2} 
            Imagem3={animal.Imagem3} 
            Metadenome1={animal.Metadenome1} 
            Metadenome2={animal.Metadenome2} 
            textointrodutorio={animal.textointrodutorio} 
            Populacao={animal.populacao} 
            Motivo={animal.motivo} 
            link={animal.nome}
          /> 
        )} 
        <Pé /> 
      </div> 
    </> 
  ); 
}
