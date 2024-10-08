import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import DoacaoService from "../services/DoacaoService"; 
import { useNavigate, useParams } from "react-router-dom";


const EditarDoacao = () => {

    const { id } = useParams(); // Pegando o id da URL
    const [doacao, setDoacao] = useState(true);


    useEffect(() => {
       DoacaoService.findById(id) // Chame a API para buscar o usuário pelo id
            .then(response => {
                setDoacao(response.data); // Atualiza o estado com os dados do usuário
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]); // Dependência do id para refazer a requisição caso o id mude

    return (
        <>
                   <Helmet><title>Editar Doação</title></Helmet>

            <Menu />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-3">
                            <label htmlFor="inputId" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputId"
                                value={doacao.id}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputNome" className="form-label">Valor:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputValor"
                                name="nome"
                                value={doacao.valor}
                              
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputData" className="form-label">Cadastro:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={doacao.DataCadastro}
                               
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Obs:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                name="obs"
                                value={doacao.obs}
                               
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">Usuario_id:</label>
                            <input
                                type="text"
                                id="inputAcesso"
                                className="form-control"
                                name="usuario_id"
                                value={doacao.usuario_id}
                               
                            />
                               
                            
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status_Doacao:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={doacao.statusDoacao}
                                
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                           
                            <button type="button" className="btn btn-danger">
                                Deletar Doação
                            </button>
                        </div>
                    </form>
                   
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default EditarDoacao;
