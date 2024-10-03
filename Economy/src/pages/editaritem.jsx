import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import ItemService from "../services/ItemService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarUsuario = () => {
    const navigate = useNavigate();
    const { itemId } = useParams(); // Pega o ID do usuário da URL
    const [item, setItem] = useState({
        id: '',
        categoria: '',
        nome: '',
        descricao: '',
        textointrodutorio: '', 
        imagem: '',
        imagem1: '',
        imagem2: '',
        imagem3: '',
        populacao: '',
        motivo: '',
        metadenome1: '',
        metadenome2: '',
        statusItem: '',


    });
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const fetchitem = async () => {
            try {
                const data = await ItemService.findById(id);
                setItem(data);
            } catch (error) {
                setMensagem('Erro ao buscar Item.');
            }
        };

        fetchitem();
    }, [itemId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UsuarioService.update(itemId, item);
            setMensagem('Item atualizado com sucesso!');
            navigate('/usuarios');
        } catch (error) {
            setMensagem('Erro ao atualizar item.');
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
                                onChange={handleChange}
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
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                name="obs"
                                value={item.descricao}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                    {mensagem && <p className="mt-2">{mensagem}</p>}
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default EditarUsuario;
