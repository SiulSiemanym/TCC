import { Helmet } from "react-helmet";
import Css from "../Css/cadastro.module.css";
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm.jsx";
import axios from "axios";
import Fundo from "../components/fundo";
import { useState } from "react";

export default function Cadastro() {
  const { mudar, valor } = useForm({ nome: "", email: "", cpf: "", senha: "" });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
   

  const validate = () => {
    const newErrors = {};
    if (!valor.nome) newErrors.nome = "Nome é obrigatório.";
    if (!valor.email) newErrors.email = "Email é obrigatório.";
    if (!valor.cpf) {
      newErrors.cpf = "CPF é obrigatório.";
    } else if (valor.cpf.length !== 11) {
      newErrors.cpf = "CPF deve ter 11 dígitos.";
    }
    if (!valor.senha) {
      newErrors.senha = "Senha é obrigatória.";
    } else if (valor.senha.length < 8) {
      newErrors.senha = "Senha deve ter pelo menos 8 dígitos.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const resposta = await axios.post("http://localhost:8080/economy/usuario/create", valor);
      localStorage.setItem("usuario", JSON.stringify(resposta.data));
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    }
  };

  return (
    <>
      <Helmet><title>Cadastro</title></Helmet>
      <Fundo>
        <Menu ativo='' />
        <div style={{ marginTop: "-2%", marginBottom: "-2%" }}>
          <div className="container">
            <div className="row ">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className={`card border-0 shadow rounded-3 my-5 bg-dark text-white ${Css.bordinha}`}>
                  <div className="card-body p-4 p-sm-5">
                    <h1 className={`card-title text-center mb-5 fw-light fs-5 ${Css.palavralogin}`} id="palavralogin">
                      <span className={`${Css.verde}`}>Cada</span>
                      <span className={`${Css.Branco}`}>stro</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
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
                          placeholder="Digite o seu email..."
                        />
                        {errors.email && <p className="text-danger fw-bold text-underline">{errors.email}</p>}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Senha" className="form-label">
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
                        {errors.senha && <p className="text-danger fw-bold text-underline">{errors.senha}</p>}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Nome" className="form-label">
                          <span className={`${Css.verde}`} style={{ fontSize: "20px !important" }}>
                            Nome
                          </span>
                          <span className={`${Css.Branco}`} style={{ fontSize: "20px !important" }}>
                            {" "} de Usuário:
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
                        {errors.nome && <p className="text-danger fw-bold text-underline">{errors.nome}</p>}
                      </div>
                      <div className="mb-5">
                        <label htmlFor="CPF" className="form-label">
                          <span className={`${Css.verde}`} style={{ fontSize: "20px !important" }}>
                            CPF
                          </span>
                          <span className={`${Css.Branco}`} style={{ fontSize: "20px !important" }}>
                            {" "} do Usuário:
                          </span>
                        </label>
                        <input
                          type="number"
                          pattern="\d*"
                          className="form-control endereco"
                          value={valor.cpf}
                          onChange={mudar("cpf")}
                          id="CPF"
                          placeholder="Digite o seu CPF..."
                        />
                        {errors.cpf && <p className="text-danger fw-bold text-underline">{errors.cpf}</p>}
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
        <Footer />
      </Fundo>
    </>
  );
}
