import React, { useState } from 'react';
import useForm from "../hooks/useForm.jsx"; 
import axios from 'axios'; 
import Menu from "../components/menu";
import Footer from "../components/footer";
import css from "../Css/esquecisenha.module.css"; // Ajuste o caminho se necessário
import { Helmet } from 'react-helmet';
import Fundo from "../components/fundo";

import { useNavigate } from 'react-router-dom';

const EsqueciSenha = () => {
    const { mudar, valor } = useForm({ senha: "", email: "", codigo: "" });
    const [codigo, setCodigo] = useState();
    const [mensagemCodigo, setMensagemCodigo] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <Helmet><title>Esqueci Senha</title></Helmet>
            <Fundo>
             <Menu ativo="" />
                <div className="container">
                    <div className={`card border-0 shadow rounded-3 my-5 bg-dark text-white ${css.bordinha}`}>
                        <div className="card-body p-4 p-sm-5">
                            <h1 className={`card-title text-center mb-5 fw-light fs-5 ${css.palavra2}`}>
                                <span className={`${css.verde}`}>Esqueci</span>
                                <span className={`${css.Branco}`}> Senha</span>
                            </h1>
                            <label htmlFor="email" className="form-label">
                                                    <span className={`${css.verde}`}>Endereço </span>
                                                    <span className={`${css.Branco}`}>de email:</span>
                                                </label>
                            <input type="text" className={`form-control ${css.exampleInputEmail1}`} value={valor.email} onChange={mudar("email")} placeholder="Digite seu email..." />
                            <button className={`btn btn-secondary btn text-uppercase fw-bold ${css.btn}`} onClick={async () => {
                                const resposta = await axios.post("http://localhost:8080/economy/usuario/esquecisenha", { email: valor.email });
                                setCodigo(resposta.data);
                                setMensagemCodigo("Código enviado para o email.");
                            }}>Recuperar Conta</button>
                            <div> 
                            <label htmlFor="email" className="form-label">
                            <span className={`${css.verde}`}>Cód</span>
                            <span className={`${css.Branco}`}>igo:</span>
                        </label>
                            <input type="text" className={`form-control ${css.exampleInputEmail1}`} value={valor.codigo} onChange={mudar("codigo")} placeholder="Digite o código recebido..." />
                            <h5>{mensagemCodigo}</h5>
                            <label htmlFor="email" className="form-label">
                            <span className={`${css.verde}`}>Nova </span>
                            <span className={`${css.Branco}`}>senha:</span>
                        </label>
                            <input type="password" className={`form-control ${css.exampleInputPassword1}`} value={valor.senha} onChange={mudar("senha")} placeholder="Digite a nova senha..." />
                            <button className={`btn btn-secondary btn text-uppercase fw-bold ${css.btn}`} onClick={async () => {
                                if (valor.codigo === codigo) {
                                    const resposta = await axios.post("http://localhost:8080/economy/usuario/mudarsenha", { senha: valor.senha, email: valor.email });
                                    navigate("/login");
                                } else {
                                    setMensagemCodigo("Código incorreto.");
                                }
                            }}>Mudar Senha</button>
                        </div>
                    </div>
                    </div>
                </div> 
            
                <Footer className={`${css.pepreso}`} />
                </Fundo>
        </>
    );
};

export default EsqueciSenha;
