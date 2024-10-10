import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import ItemService from "../services/ItemService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarItem = () => {

        const { id } = useParams(); // Pegando o id da URL
        const [item, setItem] = useState(true);
    
    
        useEffect(() => {
           ItemService.findById(id) // Chame a API para buscar o usuário pelo id
                .then(response => {
                    setItem(response.data); // Atualiza o estado com os dados do usuário
                })
                .catch(error => {
                    console.error(error);
                });
        }, [id]); // Dependência do id para refazer a requisição caso o id mude
    
    
    
    return (
        <>
                   <Helmet><title>Editar Item</title></Helmet>
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
                                value={item.id}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCategoria" className="form-label">Categoria:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputValor"
                                name="nome"
                                value={item.categoria}
                               
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputNome" className="form-label">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={item.nome}
                                
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputDescricao" className="form-label">descricao:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                name="obs"
                                value={item.descricao}
                              
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">texto_introdutorio:</label>
                            <input
                                type="text"
                                id="inputAcesso"
                                className="form-control"
                                name="usuario_id"
                                value={item.textointrodutorio}
                            
                            />
                               
                            
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem(Catalogo):</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.imagem}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.imagem1}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.imagem2}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem3:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.imagem1}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Populacao:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.populacao}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Motivo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.motivo}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Metadenome1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.metadenome1}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Metadenome2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.metadenome2}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status_item:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={item.statusItem}
                                
                            />
                        </div>

                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                           
                            <button type="button" className="btn btn-danger">
                                Deletar Item
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhar}`} />
        </>
    );
    };

export default EditarItem;
