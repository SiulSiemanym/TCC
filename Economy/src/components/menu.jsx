import menu from "../Css/menu.module.css"
import Imagem from "../assets/Imagens/Menu/Perfil.png"
import Logo from "../assets/Imagens/Menu/Logo.png"
import { Link } from "react-router-dom"



export default function Menu({ ativo }){
    return(
      
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  " data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="Home.html"><img src={Logo} className={menu.logo}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${ativo == "home" ? " active" : ""} ${menu.navegacao}`} to={'/'}>Início</Link>
                </li>
        
                <li className="nav-item">
                  <Link className={`nav-link ${ativo =="habitats" ? " active" : ""}  ${menu.navegacao}`} to={'/habitats'}>Habitats</Link>
                </li>
                
                <li className="nav-item">
                  <Link className={`nav-link ${ativo =="animais" ? " active" : ""}  ${menu.navegacao}`} to={'/animais'}>Animais</Link>
                </li>
                <li className="nav-item"> 
                  <a className={`nav-link ${ativo == "Sobre" ? " active" : ""}  ${menu.navegacao}`} href="sobre.html">Sobre nós</a>
                </li>
              </ul>
              <span className="navbar-text">
                <Link to={'/cadastro'}><img className={menu.perfil} src={Imagem}/></Link>
              </span>
            </div>
          </div>
        </nav>
  </header>

    )
}