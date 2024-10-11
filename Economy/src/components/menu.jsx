import { useEffect, useState } from "react"; 
import menu from "../Css/menu.module.css";
import Imagem from "../assets/Imagens/Menu/Perfil.png";
import Logo from "../assets/Imagens/Menu/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Menu({ ativo }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Buscar dados do usuário (incluindo imagem) no backend
    const fetchUsuario = async () => {
      try {
        const usuarioJSON = localStorage.getItem("usuario"); // Acessa o usuário logado
        const usuarioData = JSON.parse(usuarioJSON);
        const response = await axios.get(`http://localhost:8080/economy/usuario/findByEmail/${usuarioData.email}`);
        setUsuario(response.data); // Definimos os dados do usuário, incluindo a imagem
      } catch (error) {
        console.error("Erro ao buscar dados do usuário", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            <img src={Logo} className={menu.logo} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${ativo === "home" ? " active" : ""} ${menu.navegacao}`} to={'/'}>Início</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ativo === "habitats" ? " active" : ""} ${menu.navegacao}`} to={'/habitats'}>Habitats</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ativo === "animais" ? " active" : ""} ${menu.navegacao}`} to={'/animais'}>Animais</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ativo === "Sobre" ? " active" : ""} ${menu.navegacao}`} to={'/sobre'}>Sobre nós</Link>
              </li>
              {usuario?.nivelAcesso === "ADMIN" && (
                <>
                  <li className="nav-item">
                    <Link className={`nav-link ${ativo === "Tabela" ? " active" : ""} ${menu.navegacao}`} to={'/usuariotabela'}>Tabela Usuário</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${ativo === "Itens" ? " active" : ""} ${menu.navegacao}`} to={'/itemtabela'}>Tabela Itens</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${ativo === "Doação" ? " active" : ""} ${menu.navegacao}`} to={'/doacao'}>Doação</Link>
                  </li>
                </>
              )}
            </ul>
            <h1 className={`${menu.nome}`}>{usuario?.nome}</h1>
            <span className="navbar-text">
              <Link to={usuario ? '/editarperfil' : '/cadastro'}>
                <img className={menu.perfil} src={usuario?.foto || Imagem} alt="Imagem de perfil" />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}


