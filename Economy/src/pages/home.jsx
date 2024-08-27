import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";




export default function Home(){
   


    return (
        <>
        <Helmet><title>Página Inicial</title></Helmet>
  <header>
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary  mb-5 "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="Home.html">
          <img src="Recursos/Imagens/Menu/Logo.png" id="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="navegacao"
                aria-current="page"
                href="Home.html"
              >
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navegacao" href="habitats.html">
                Habitats
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="navegacao"  to="/CatalogAnimal">
                Animais
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navegacao" href="sobre.html">
                Sobre nós
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <a href="login.html">
              <img id="perfil" src="Recursos/Imagens/Menu/Perfil.png" />
            </a>
          </span>
        </div>
      </div>
    </nav>
  </header>
  <div className=" " style={{ position: "relative" }} id="jorge">
    <div
      className="card text-white ms-5"
      id="nossomos"
      style={{ backgroundColor: "#2b3035 !important" }}
    >
      <div className="card-body">
        <h1 className="card-title" id="tamanhonossomos">
          <span id="branco">Somos</span> a <span id="verde">Eco</span>
          <span id="branco">nomy!</span>
        </h1>
        <p className="card-text" id="conteudocarta" style={{ fontSize: 30 }}>
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
      <h1 id="titulo" className="mb-0 w-50">
        <span id="verde">Bem</span> <span id="branco">Vindo!</span>
      </h1>
      <div
        id="carouselExampleInterval"
        className="carousel slide w-50 m-auto"
        data-bs-ride="carousel"
        style={{ height: 500 }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="animal.html">
              <img
                id="animaishome"
                src="Recursos/Imagens/Inicio/Bears_Pandas_Branches_531233_1920x1080.jpg"
                className="d-block w-100  mx-auto "
                alt="..."
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h4>Animais que ajudamos!</h4>
              <h5>
                <span id="branco">Panda</span>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <a href="animal.html">
              <img
                id="animaishome"
                src="Recursos/Imagens/Habitats/Amazonia.avif"
                className="d-block w-100  mx-auto "
                alt="..."
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h4>Habitats que ajudamos!</h4>
              <h5>
                <span id="branco">Amazonia</span>
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <a href="animal.html">
              <img
                id="animaishome"
                src="Recursos/Imagens/Animais/girafa03.jpg"
                className="d-block w-100  mx-auto "
                alt="..."
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h4>Animais que ajudamos!</h4>
              <h5>
                <span id="branco">Girafas</span>
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