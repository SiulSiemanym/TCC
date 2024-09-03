import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "../Css/home.module.css"
import Panda from "../assets/Imagens/Inicio/PANDAHOMOSSEXUALFDP.jpg"
import Amazonia from "../assets/Imagens/Habitats/Amazonia.avif"
import Girafa from "../assets/Imagens/Animais/girafa03.jpg"


export default function Home(){
    return (
      <>
      <Helmet>
        <title>Página Inicial</title>
      </Helmet>
      
      <div className={`${styles.jorge} ${styles.posição}`}>
        <div
          className={`card text-white ms-5 ${styles.nossomos}`}
          style={{ backgroundColor: "#2b3035" }} // Removido !important para garantir a aplicação do estilo
        >
          <div className="card-body">
            <h1 className={`card-title ${styles.tamanhonossomos}`}>
              <span className={styles.branco}>Somos</span> a{" "}
              <span className={styles.verde}>Eco</span>
              <span className={styles.branco}>nomy!</span>
            </h1>
            <p className={`card-text ${styles.conteudocarta}`}>
              Nós somos responsáveis por arrecadar dinheiro para ajudar os animais e
              as florestas do nosso país e do mundo.
            </p>
            <a href="habitats.html" className="btn btn-secondary">
              Habitats
            </a>
            <a href="animal.html" className="btn btn-secondary">
              Animais
            </a>
          </div>
        </div>
        <div>
          <h1 className={`mb-0 w-50 ${styles.titulo}`}>
            <span className={styles.verde}>Bem</span>{" "}
            <span className={styles.branco}>Vindo!</span>
          </h1>
          <div
            className={`carousel slide w-50 m-auto ${styles.carouselExampleInterval}`}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
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
              <div className="carousel-item">
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
    </>
    )
}