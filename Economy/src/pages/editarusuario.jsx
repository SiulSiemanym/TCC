import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import UsuarioService from "../services/UsuarioService"; 
import { useNavigate, useParams } from "react-router-dom";
import useForm from '../hooks/useForm';

const EditarUsuario = () => {
    const { id } = useParams(); // Pegando o id da URL
    const [usuario, setUsuario] = useState(true);


    useEffect(() => {
        UsuarioService.findById(id) // Chame a API para buscar o usuário pelo id
            .then(response => {
                setUsuario(response.data); // Atualiza o estado com os dados do usuário
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]); // Dependência do id para refazer a requisição caso o id mude


    return (
        <>
                    <Helmet><title>Editar Usuário</title></Helmet>
            <Menu />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" >
                        <div className="col-md-3">
                            <label htmlFor="inputId" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputId"
                                value={usuario.id}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputNome" className="form-label">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNome"
                                name="nome"
                                value={usuario.nome}
                             
                                
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputData" className="form-label">Cadastro:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={usuario.dataCadastro}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                name="email"
                                value={usuario.email}
                                
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">Acesso:</label>
                            <select
                                id="inputAcesso"
                                className="form-select"
                                name="acesso"
                                value={usuario.nivelAcesso}
                             
                            >
                                <option value="">Nível de Acesso</option>
                                <option value="admin">Admin</option>
                                <option value="usuario">Usuário</option>
                                
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={usuario.statusUsuario}
                           
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                            <button type="button" className="btn btn-warning">
                                Reativar / Resetar a Senha
                            </button>
                            <button type="button" className="btn btn-danger">
                                Inativar Conta
                            </button>
                        </div>
                    </form>
                   
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default EditarUsuario;
