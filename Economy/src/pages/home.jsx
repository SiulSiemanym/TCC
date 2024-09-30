import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Panda from "../assets/Imagens/Inicio/PANDAHOMOSSEXUALFDP.jpg"
import Amazonia from "../assets/Imagens/Habitats/Amazonia.avif"
import Girafa from "../assets/Imagens/Animais/girafa03.jpg"
import Menu from "../components/menu";
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg"
import styles from "../Css/home.module.css"
import FOOOTER from "../components/footer.jsx"

export default function Home(){
    return (
      <>
      <Helmet>
        <title>Página Inicial</title>
      </Helmet>
      <Menu ativo={"home"} />
      <div className={`${styles.jorge} ${styles.posição} ${styles.bodysubistituto} ${styles.backgroundimage}`} style={{ backgroundImage:`url(${back})` }}>
        <div
          className={`card text-white mt-5 ms-5 ${styles.nossomos}` }

        >
          <div className={`card-body ${styles.tamanhocarta}`}>
            <h1 className={`card-title ${styles.tamanhonossomos}`}>
              <span className={styles.branco}>Somos</span> a{" "}
              <span className={styles.verde}>Eco</span>
              <span className={styles.branco}>nomy!</span>
            </h1>
            <p className={`card-text ${styles.conteudocarta}`}>
              Nós somos responsáveis por arrecadar dinheiro para ajudar os animais e
              as florestas do nosso país e do mundo.
            </p>
            <Link to={'/habitats'} className={`btn btn-secondary ${styles.botaodohome}`}>
              Habitats
            </Link>
            <Link to={'/animais'} className="btn btn-secondary">
              Animais
            </Link>
          </div>
        </div>
        <div>
          <h1 className={`mb-0 w-50 mt-5 ${styles.titulo}`}>
            <span className={styles.verde}>Bem</span>{" "}
            <span className={styles.branco}>Vindo!</span>
          </h1>
          <div
            id="carouselExampleInterval"
            className={`carousel slide w-50 m-auto ${styles.carouselExampleInterval}`}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item ">
                <a href="animal.html">
                  <img
                    src={Panda}
                    className={`d-block w-100 mx-auto ${styles.animaishome}`}
                    alt="Animais"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h4>Animais que ajudamos!</h4>
                  <h5>
                    <span className={styles.branco}>Panda</span>
                  </h5>
                </div>
              </div>
              <div className="carousel-item active">
                <a href="animal.html">
                  <img
                    src={Amazonia}
                    className={`d-block w-100 mx-auto ${styles.animaishome}`}
                    alt="Amazonia"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h4>Habitats que ajudamos!</h4>
                  <h5>
                    <span className={styles.branco}>Amazonia</span>
                  </h5>
                </div>
              </div>
              <div className="carousel-item">
                <a href="animal.html">
                  <img
                    src={Girafa}
                    className={`d-block w-100 mx-auto ${styles.animaishome}`}
                    alt="Girafas"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h4>Animais que ajudamos!</h4>
                  <h5>
                    <span className={styles.branco}>Girafas</span>
                  </h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    <FOOOTER className={`${styles.sobesafada}`} />
     
    </>
    )
}