import { Link } from "react-router-dom"
import Am from '../Css/animais.module.css';



export default function Habitat({Metadenome1, Metadenome2, Imagem1, Imagem2, Imagem3, Extensao, Motivo, textointrodutorio}) {

return(
    <>
  <div className={`${Am.descesafada}`}>
    <div>
      <h1 className={`${Am.bordaverdeemcima } ${Am.animaltitulopagina}`}>
        <span className={Am.verde}>{Metadenome1}</span>
        <span className={Am.branco}>{Metadenome2}</span>
      </h1>
      <div
        className={`card mb-3 text-bg-dark text-left mx-auto ${Am.bordaverdeembaixo} ${Am.caixagrandetexto}`}
      >
        <div
          id="carouselExampleControls"
          className={`carousel slide ${Am.carouselExampleControls}`}
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src={Imagem1}
                className={`d-block w-100 ${Am.imagemabaixa}`}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Imagem2}
                className={`d-block w-100 ${Am.imagemabaixa}`}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Imagem3}
                className={`d-block w-100 ${Am.imagemabaixa}`}
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
          <h4 className={`card-title ps-3 ${Am.aumentarafontepeloamortitulo}`}>
            <span className={Am.verde}>{Metadenome1}</span>
            <span className={Am.branco}>{Metadenome2} </span>
          </h4>
          <p className={`card-text ps-3 ${Am.aumentarafontepeloamor}`}  >
            {textointrodutorio}
          </p>
          <h4 className={`card-title ps-3 ${Am.aumentarafontepeloamortitulo}`}>
            <span className={Am.verde}>População </span>
            <span className={Am.branco}>atual:</span>
          </h4>
          <p className={`card-text ps-3 ${Am.aumentarafontepeloamor}`}>
            {Extensao}
          </p>
          <h4 className={`card-title ps-3 ${Am.aumentarafontepeloamortitulo}`}>
            <span className={Am.verde}>Por quê temos</span>
            <span className={Am.branco}> que doar dinheiro?</span>
          </h4>
          <p className={`card-text ps-3 ${Am.aumentarafontepeloamor}`}>
            {Motivo}
          </p>
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