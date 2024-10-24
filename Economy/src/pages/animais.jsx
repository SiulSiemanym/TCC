import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Animal from '../Css/animais.module.css';
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Lupa from "../assets/Imagens/Animais/lupa.png";
import Tabela from "../components/criarelementotabela";
import Menu from "../components/menu";
import Pé from "../components/footer";
import useRequisitar from "../hooks/useRequisitar";

export default function CatalogAnimal({ categoria = "Animal" }) {
  const [consulta, setConsulta] = useState("");
  const [animais, carregando] = useRequisitar("economy/item/findAll/" + categoria, [categoria]);

  // Define o menu ativo com base na categoria
  const menuAtivo = categoria.toLowerCase() === "habitat" ? "habitats" : "animais";

  return (
    <>
      <Helmet><title>Catálogo Animais</title></Helmet>
      <div className={`${Animal.backgroundimage}`} style={{ backgroundImage: `url(${back})` }}>
        <Menu ativo={menuAtivo} />
        { carregando ? <h1>Carregando...</h1> : (
          <div>
            <div id="barradepesquisa" className={`mb-5 ${Animal.barradepesquisa}`}>
              <input 
                onChange={(e) => setConsulta(e.target.value)} 
                type="text" 
                id="txtBusca" 
                className={`${Animal.txtBusca}`} 
                placeholder="Pesquisar animais..." 
              />
              <img src={Lupa} className={`${Animal.lupa}`} alt="Lupa" />
            </div>
            <div
              id="animal-list"
              className={`d-flex justify-content-center flex-column align-items-center`}
            >
              {
                animais
                  .filter(animal => animal.nome.toLowerCase().includes(consulta.toLowerCase()))
                  .map(animal => (
                    <Tabela 
                      key={animal.nome} 
                      link={animal.link} 
                      image={animal.imagem} 
                      nome={animal.nome} 
                      descricao={animal.descricao} 
                    />
                  ))
              }
            </div>
          </div>
        )}
      </div>
      <Pé />
    </>
  );
}
