import { Helmet } from "react-helmet";
import Css from "../Css/cadastro.module.css"
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg"
import Menu from "../components/menu"
import Footer from "../components/footer"
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios"

export default function Cadastro(){
  const{ mudar, valor }=useForm({ nome:"", email:"", cpf:"", senha:"" })
  const navigate = useNavigate()
  console.log(valor)
    return(
        <>
        <Menu ativo=''/>
  <div className={`${Css.backgroundimage}`} style={{ backgroundImage:`url(${back})` }}/>
  
  <div style={{ marginTop: "-2%", marginBottom: "-2%" }}>
    <div className="container">
      <div className="row ">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div
            className={`card border-0 shadow rounded-3 my-5 bg-dark text-white ${Css.bordinha}`}
        
          >
            <div className="card-body p-4 p-sm-5">
              <h1
                className={`card-title text-center mb-5 fw-light fs-5 ${Css.palavralogin}`}
                id="palavralogin"
              >
                <span className={`${Css.verde}`}>Cada</span>
                <span className={`${Css.Branco}`}>stro</span>
              </h1>
              <form onSubmit={async (e) => {
                e.preventDefault()
                const resposta = await axios.post("http://localhost:8080/economy/usuario/create", valor)
                localStorage.setItem("usuario", JSON.stringify(resposta.data))
                navigate("/")
              }}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <span className={`${Css.verde}`} style={{ fontSize: "20px !important" }}>
                      Endereço
                    </span>
                    <span className={`${Css.Branco}`} style={{ fontSize: "20px !important" }}> de email:</span>
                  </label>
                  <input
                    type="email"
                    className="form-control endereco"
                    id="Email"
                    value={valor.email}
                    onChange={mudar("email")}
                    aria-describedby="emailHelp"
                    placeholder="Digite o seu email..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <span className={`${Css.verde}`} style={{ fontSize: "20px !important" }}>
                      Sen
                    </span>
                    <span className={`${Css.Branco}`} style={{ fontSize: "20px !important" }}>
                      ha:
                    </span>
                  </label>
                  <input
                    type="password"
                    value={valor.senha}
                    onChange={mudar("senha")}
                    className="form-control endereco"
                    id="Senha"
                    placeholder="Digite a sua senha..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <span className={`${Css.verde}`} style={{ fontSize: "20px !important" }}>
                      Nome
                    </span>
                    <span className={`${Css.Branco}`} style={{ fontSize: "20px !important" }}>
                      {" "}
                      de Usuário:
                    </span>
                  </label>
                  <input
                    type="name"
                    className="form-control endereco"
                    value={valor.nome}
                    onChange={mudar("nome")}
                    id="Nome"
                    placeholder="Digite o seu nome..."
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <span className={`${Css.verde}`} style={{ fontSize: "20px !important" }}>
                      CPF
                    </span>
                    <span className={`${Css.Branco}`} style={{ fontSize: "20px !important" }}>
                      {" "}
                      do Usuário:
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control endereco"
                    value={valor.cpf}
                    onChange={mudar("cpf")}
                    id="CPF"
                    placeholder="Digite o seu CPF..."
                  />
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-secondary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Cadastrar-se
                  </button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <Link
                    to='/login'
                    style={{ textDecoration: "none !important" }}
                  >
                    <h5 className={Css.linknao}>Já tem uma conta? Faça Login aqui!</h5>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</>

    )}