import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import CatalogoService from "../services/CatalogoService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarUsuario = () => {
    const navigate = useNavigate();
    const { catalogoId } = useParams(); // Pega o ID do usuário da URL
    const [catalogo, setCatalogo] = useState({
        id: '',
        dataCadastro: '',
        obs: '',
        item_id: '',
        statusItem: '',
        
       


    });
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const fetchcatalogo = async () => {
            try {
                const data = await CatalogoService.findById(id);
                setCatalogo(data);
            } catch (error) {
                setMensagem('Erro ao buscar catalogo.');
            }
        };

        fetchcatalogo();
    }, [catalogoId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCatalogo({ ...catalogo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UsuarioService.update(catalogoId, catalogo);
            setMensagem('catalogo atualizado com sucesso!');
            navigate('/usuarios');
        } catch (error) {
            setMensagem('Erro ao atualizar catalogo.');
        }
    };

    return (
        <>
            <Menu />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSubmit}>
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                    {mensagem && <p className="mt-2">{mensagem}</p>}
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default EditarUsuario;
