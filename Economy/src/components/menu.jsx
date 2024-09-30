import menu from "../Css/menu.module.css"
import Imagem from "../assets/Imagens/Menu/Perfil.png"
import Logo from "../assets/Imagens/Menu/Logo.png"
import { Link } from "react-router-dom"



export default function Menu({ ativo,  profileImage}){
  const usuarioJSON = localStorage.getItem("usuario")
  const usuario = JSON.parse(usuarioJSON)
    return(
      
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  " data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}><img src={Logo} className={menu.logo}/></Link>
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
                  <Link className={`nav-link ${ativo == "Sobre" ? " active" : ""}  ${menu.navegacao}`} to={'/sobre'} >Sobre nós</Link>
                </li>
              </ul>
              <h1>{usuario.nome}</h1>
              <span className="navbar-text">
                <Link to={'/cadastro'}><img className={menu.perfil} src={profileImage || localStorage.getItem("imagem") || Imagem } /></Link>
              </span>
            </div>
          </div>
        </nav>
  </header>

    )
}