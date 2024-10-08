import React from 'react';
import useForm from "../hooks/useForm.jsx"; // Importa o hook de formulário
import axios from 'axios'; // Importa o Axios
import Menu from "../components/menu";
import Footer from "../components/footer";
import css from "../Css/login.module.css"; // Importa seu CSS
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { valor, mudar } = useForm({ email: '', senha: '' });
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(valor.email)
            const resposta = await axios.post('http://localhost:8080/economy/usuario/signin', valor);
            console.log('Login bem-sucedido:', resposta.data);
            localStorage.setItem("usuario", JSON.stringify(resposta.data))
            navigate("/")
            // Aqui você pode armazenar os dados do usuário ou o token
        } catch (error) {
            console.error('Erro ao fazer login:', error.response.data);
            // Aqui você pode mostrar uma mensagem de erro para o usuário
        }
    };

    return (
        <>
                <Helmet><title>Login</title></Helmet>
        <Menu ativo=""/>
        <div>
  <div className="container">
    <div className="row ">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div
          className={`card border-0 shadow rounded-3 my-5 bg-dark text-white ${css.bordinha}`}
          
        >
          <div className="card-body p-4 p-sm-5">
            <h1
              className={`card-title text-center mb-5 fw-light fs-5 ${css.palavralogin}`}
            >
              <span className={`${css.verde}`}>Lo</span>
              <span className={`${css.Branco}`}>gin</span>
            </h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                <span className={`${css.verde}`}>Endereço </span>
                                                <span className={`${css.Branco}`}>de email:</span>
                                            </label>
                                            <input
                                                type="email"
                                                className={`form-control ${css.exampleInputEmail1}`}
                                                id="email"
                                                value={valor.email}
                                                onChange={mudar('email')}
                                                placeholder="Digite o seu email..."
                                                required
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="senha" className="form-label">
                                                <span className={`${css.verde}`}>Sen</span>
                                                <span className={`${css.Branco}`}>ha:</span>
                                            </label>
                                            <input
                                                type="password"
                                                className={`form-control ${css.exampleInputEmail1}`}
                                                id="senha"
                                                value={valor.senha}
                                                onChange={mudar('senha')}
                                                placeholder="Digite a sua senha..."
                                                required
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button
                                                className="btn btn-secondary btn-login text-uppercase fw-bold"
                                                style={{ maxWidth: 395 }}
                                                type="submit"
                                            >
                                                Entrar
                                            </button>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-grid mb-2">
                <Link     to='/cadastro'>
                  <h5 className={`${css.linknao}`}>Não tem uma conta? Cadastre-se aqui!</h5>
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
        </>
    );
};

export default Login;
