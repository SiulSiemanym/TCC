import { Link } from "react-router-dom"
import Am from '../Css/animais.module.css';


export default function Animal({ link, id, image, nome, descricao }) {

return(
    <>
    <div className="background-image" />
  <div>
    <div>
      <h1 id="animaltitulopagina" className="bordaverdeemcima">
        <span id="verde">Pan</span>
        <span id="branco">das Gigantes</span>
      </h1>
      <div
        className="card mb-3 text-bg-dark text-left mx-auto bordaverdeembaixo"
        id="caixagrandetexto"
      >
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="Recursos/Imagens/Animais/Bears_Pandas_Branches_531233_1920x1080.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="Recursos/Imagens/Animais/panda2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="Recursos/Imagens/Animais/meme.jfif"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body ">
          <h4 className="card-title ps-3">
            <span id="verde">Pan</span>
            <span id="branco">das Gigantes: </span>
          </h4>
          <p className="card-text ps-3">
            {" "}
            Os pandas gigantes são nativos da região montanhosa da China
            central, onde habitam principalmente as florestas de bambu.
            Infelizmente, esses adoráveis ursos estão enfrentando uma séria
            ameaça de extinção devido à perda de habitat, fragmentação do
            habitat, caça furtiva e baixas taxas de reprodução.
          </p>
          <h4 className="card-title ps-3">
            <span id="verde">Quantos Pandas</span>
            <span id="branco"> Gigantes existem?</span>
          </h4>
          <p className="card-text ps-3">
            Existem 2200 Pandas Gigantes os quais 400 tão em cativeiro.
          </p>
          <h4 className="card-title ps-3">
            <span id="verde">Por que temos que doar dinheiro</span>
            <span id="branco"> para salvar os Pandas Gigantes?</span>
          </h4>
          <ul className="listamotivos">
            <br />
            <li>
              <span id="verde">Preservação da</span>
              <span id="branco"> bio diversidade:</span> Os pandas gigantes são
              uma espécie icônica e um símbolo da biodiversidade. Ao proteger os
              pandas, também estamos protegendo o ecossistema em que vivem e
              todas as outras espécies que compartilham esse habitat.
            </li>
            <br />
            <li>
              <span id="verde">Conservação do</span>
              <span id="branco"> Habitat:</span> As doações financiam projetos
              de conservação que visam proteger e restaurar o habitat dos
              pandas, ajudando a preservar as florestas de bambu e as áreas
              naturais de importância crítica para sua sobrevivência.
            </li>
            <br />
            <li>
              <span id="verde">Combate à</span>
              <span id="branco"> Extinção:</span> Os pandas gigantes estão em
              perigo de extinção devido à perda de habitat, fragmentação de
              território e outras ameaças. Doar dinheiro para organizações de
              conservação pode ajudar a reverter essa tendência e garantir que
              os pandas continuem a existir no futuro.
            </li>
            <br />
            <li>
              <span id="verde">Pesquisa e</span>
              <span id="branco"> Monitoramento:</span> As doações financiam
              pesquisas científicas e programas de monitoramento que ajudam a
              entender melhor as necessidades dos pandas e a desenvolver
              estratégias eficazes de conservação.
            </li>
            <br />
            <li>
              <span id="verde">Educação e</span>
              <span id="branco"> Sensibilização:</span> As doações também são
              usadas para programas de educação pública que aumentam a
              conscientização sobre a importância da conservação dos pandas e
              incentivam ações positivas para protegê-los.
            </li>
            <br />
            <li>
              <span id="verde">Promoção do</span>
              <span id="branco"> Ecoturismo Sustentável:</span> A conservação
              dos pandas pode promover o desenvolvimento do ecoturismo
              sustentável, proporcionando oportunidades econômicas para as
              comunidades locais e incentivando práticas que beneficiem tanto os
              pandas quanto as pessoas que vivem em suas áreas de habitat.
            </li>
          </ul>
          <br />
          <a href="pagamento.html">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: "15%" }}
            >
              Doar
            </button>
          </a>
          <a href="animal.html">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: "15%" }}
            >
              Voltar
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</>

)}