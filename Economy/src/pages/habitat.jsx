import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Animal from '../Css/animais.module.css';
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Lupa from "../assets/Imagens/Animais/lupa.png";
import Tabela from "../components/criarelementotabela";
import Menu from "../components/menu"
import { useState } from "react";
import Pé from "../components/footer"
import { habitats } from "../constants/habitats";



export default function CatalogAnimal(){
  const [consulta, setConsulta] = useState("")
  
    return(
        <>
        <Helmet><title>Catálogo Animais</title></Helmet>
        <Menu ativo={"habitats"}/>
        <div className={`${Animal.backgroundimage}`} style={{ backgroundImage:`url(${back})` }} >
        
        <div>
          <div id="barradepesquisa" className={`mb-5  ${Animal.barradepesquisa}`} >
            <input onChange={(e) => setConsulta(e.target.value)} type="text" id="txtBusca" className={`${Animal.txtBusca}`} placeholder="Pesquisar animais..." />
            <img src={Lupa} className={`${Animal.lupa}`}  />
          </div>
          <div
            id="animal-list"
            className={`d-flex justify-content-center flex-column align-items-center`}
          >
          {
            
            habitats.filter(animal => animal.nome.toLocaleLowerCase().includes(consulta.toLocaleLowerCase())).map(animal => <Tabela key={animal.nome} link={animal.link} id="Girafa" image={animal.imagem} nome={animal.nome} descricao={animal.descricao}/>)
          }
                       
          


          </div>
        </div>
        </div>
        <Pé />
      </>
        
    )
}