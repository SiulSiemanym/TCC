import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Animal from '../Css/animais.module.css';
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Lupa from "../assets/Imagens/Animais/lupa.png";
import Tabela from "../components/criarelementotabela";
import GirafaImg from "../assets/Imagens/Animais/Giraffes_513870_1920x1080.jpg"
import Menu from "../components/menu"
import { useState } from "react";
import Pé from "../components/footer"

export default function CatalogAnimal(){
  const [consulta, setConsulta] = useState("")
  const animais = [
    {
      nome: "Girafa",
      link: "girafa",
      image: GirafaImg,
      descricao:  "Imagine um mundo onde a majestosa girafa não mais percorre as savanas africanas. Com sua graça e elegância únicas, esses animais estão em perigo. Sua doação pode garantir que programas de conservação continuem protegendo as girafas e seu habitat. Cada contribuição conta, cada gesto importa. Juntos, podemos estender nossos pescoços pela preservação dessas criaturas magníficas. ",
    },
    
  ]
    return(
        <>
        <Helmet><title>Catálogo Animais</title></Helmet>
        <Menu ativo={"animais"}/>
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
            
            animais.filter(animal => animal.nome.toLocaleLowerCase().includes(consulta.toLocaleLowerCase())).map(animal => <Tabela key={animal.nome} link={animal.link} id="Girafa" image={animal.image} nome={animal.nome} descricao={animal.descricao}/>)
          }
                       
          


          </div>
        </div>
        </div>
        <Pé />
      </>
        
    )
}