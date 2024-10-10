import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import CatalogoService from "../services/CatalogoService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarCatalogo = () => {

    const { id } = useParams(); // Pegando o id da URL
    const [catalogo, setCatalogo] = useState(true);


    useEffect(() => {
       CatalogoService.findById(id) // Chame a API para buscar o usuário pelo id
            .then(response => {
                setCatalogo(response.data); // Atualiza o estado com os dados do usuário
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]); // Dependência do id para refazer a requisição caso o id mude

    
    return (
        <>
                <Helmet><title>Editar Catálogo</title></Helmet>

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
                                value={catalogo.id}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputData" className="form-label">data_cadastro:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                name="data_cadastro"
                                value={catalogo.dataCadastro}
                               
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputObs" className="form-label">obs:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputObs"
                                value={catalogo.obs}
                                
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputItemId" className="form-label">item_id:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inpuItemId"
                                name="item_id"
                                value={catalogo.item_id}
                                
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status_Item:</label>
                            <input
                                type="text"
                                id="inputStatus"
                                className="form-control"
                                name="status_item"
                                value={catalogo.statusItem}
                              
                            />
                        </div>
                      

                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                           
                            <button type="button" className="btn btn-danger">
                                Deletar Catálogo
                            </button>
                        </div>
                    </form>
                    
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhar}`} />
        </>
    );
};

export default EditarCatalogo;
