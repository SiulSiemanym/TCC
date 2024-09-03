import menu from "../Css/menu.module.css"
import Imagem from "../assets/Imagens/Menu/Perfil.png"
import Logo from "../assets/Imagens/Menu/Logo.png"

export default function Menu(){
    return(
        <header className={menu.header}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="Home.html">
              <img src={Logo} className={menu.logo} alt="Logo" />
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
                    className={`nav-link active ${menu.navegacao}`}
                    aria-current="page"
                    href="Home.html"
                  >
                    Início
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${menu.navegacao}`} href="habitats.html">
                    Habitats
                  </a>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${menu.navegacao}`} to="/animal.html">
                    Animais
                  </Link>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${menu.navegacao}`} href="sobre.html">
                    Sobre nós
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                <a href="login.html">
                  <img className={menu.perfil} src={Imagem} alt="Perfil" />
                </a>
              </span>
            </div>
          </div>
        </nav>
      </header>
    )
}