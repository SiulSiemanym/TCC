import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Animal from '../Css/animais.module.css';
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Lupa from "../assets/Imagens/Animais/lupa.png";
import Tabela from "../components/criarelementotabela";
import Menu from "../components/menu"
import { useState } from "react";
import Pé from "../components/footer"
import FlorestaAmazonica from "../assets/Imagens/Habitats/Amazonia.avif"
import Corais from "../assets/Imagens/Habitats/corais.avif"
import Manguezais from "../assets/Imagens/Habitats/manguezal01.png"
import Savana from "../assets/Imagens/Habitats/savana.avif"
import Atlantica from "../assets/Imagens/Habitats/atlantica.avif"


export default function CatalogAnimal(){
  const [consulta, setConsulta] = useState("")
  const animais = [
  
    {
      nome: "Amazonia",
      link: "amazonia",
      imagem: FlorestaAmazonica,
      descricao: "O pulmão do mundo está em perigo! Ajude a proteger as florestas amazônicas, lar de inúmeras espécies e crucial para o equilíbrio climático global. Sua doação faz a diferença: mantenha a Amazônia viva e pulsante para as gerações futuras. Juntos, podemos preservar esse tesouro natural único. Contribua agora!",
      categoria: "habitat"
    },

    {
      nome: "Recifes de Corais",
      link: "recifes",
      imagem: Corais,
      descricao: "Os recifes de corais são como cidades subaquáticas, abrigando uma vasta gama de vida marinha e protegendo as costas da erosão. No entanto, esses ecossistemas vitais estão sob crescente ameaça devido à atividade humana. Ao doar para a preservação dos recifes de corais, você está investindo na saúde dos oceanos e na sustentabilidade de inúmeras espécies marinhas. Sua contribuição pode financiar projetos de conservação, pesquisa e educação que são essenciais para proteger esses preciosos habitats marinhos. Junte-se a nós na missão de salvar os recifes de corais e garantir um futuro sustentável para os oceanos e para nós mesmos. Doe hoje e faça a diferença!",
      categoria: "habitat"
    },
    
    {
      nome: "Manguezais",
      link: "manguezais",
      imagem: Manguezais,
      descricao: "Os manguezais são essenciais para a vida marinha e a proteção costeira. Eles abrigam diversas espécies, ajudam na pesca e combatem as mudanças climáticas capturando carbono. No entanto, estão ameaçados por desmatamento e poluição. Doar para organizações que preservam manguezais é crucial. Sua contribuição apoia projetos de recuperação e educação ambiental. Ao doar, você protege a biodiversidade e fortalece as comunidades costeiras. Faça a diferença hoje e ajude a salvar os manguezais!",
      categoria: "habitat"
    },
    
    {
      nome: "Savana",
      link: "savana",
      imagem: Savana,
      descricao: "A savana é um ecossistema vital, lar de animais como leões e elefantes, e crucial para o equilíbrio ambiental. No entanto, enfrenta ameaças como desmatamento e mudanças climáticas. Doar para organizações de conservação é essencial para proteger a savana. Sua contribuição apoia projetos de preservação e educação ambiental. Ajude a salvar a savana e garantir um futuro sustentável para a vida selvagem e as comunidades locais. Doe hoje!",
      categoria: "habitat"
    },

    {
      nome: "Mata Atlântica",
      link: "atlantica",
      imagem: Atlantica,
      descricao: "A Mata Atlântica é vital para o clima, a água e a biodiversidade, abrigando muitas espécies únicas. No entanto, sofre com o desmatamento e a urbanização.",
      categoria: "habitat"
    },

    
    
  ]
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
            
            animais.filter(animal => animal.nome.toLocaleLowerCase().includes(consulta.toLocaleLowerCase())).map(animal => <Tabela key={animal.nome} link={animal.link} id="Girafa" image={animal.imagem} nome={animal.nome} descricao={animal.descricao}/>)
          }
                       
          


          </div>
        </div>
        </div>
        <Pé />
      </>
        
    )
}