import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import ItemService from "../services/ItemService"; 
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useEnviar from "../hooks/useEnviar.jsx"
import useForm from "../hooks/useForm"
import { Helmet } from 'react-helmet';


const EditarItem = () => {

    const navigate = useNavigate();
    const objectValues = {
        categoria: "",
        nome: "",
        descricao: "",
        textointrodutorio: "",
        imagem: "",
        imagem1: "",
        imagem2: "",
        imagem3: "",
        populacao: "",
        motivo: "",
        metadenome1: "",
        metadenome2: "",
        statusItem:"",
    }

    const { requisitar } = useEnviar((dados) => {
        if (dados.id == item?.id) {

        }
        navigate('/tabelaitem')
    })

    const { mudar, valor, mudarDireto } = useForm(objectValues)

    const { id } = useParams(); // Pegando o id da URL
    const [item, setItem] = useState(undefined);
    const [editar, setEditando] = useState(true); // Controla se está editando

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await ItemService.findById(id);
                setItem(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchItem();
    }, [id]);

    useEffect(() => {
        if (item) {
            console.log(item)
            mudarDireto("categoria", item.categoria)
            mudarDireto("nome", item.nome)
            mudarDireto("descricao", item.descricao)
            mudarDireto("textointrodutorio", item.textointrodutorio)
            mudarDireto("imagem", item.imagem)
            mudarDireto("imagem1", item.imagem1)
            mudarDireto("imagem2", item.imagem2)
            mudarDireto("imagem3", item.imagem3)
            mudarDireto("populacao", item.populacao)
            mudarDireto("motivo", item.motivo)
            mudarDireto("metadenome1", item.metadenome1)
            mudarDireto("metadenome2", item.metadenome2)
            mudarDireto("statusItem", item.statusItem)


        }
    }, [item])

    const handleChange = (e) => {
        const { item, valor } = e.target;
        setItem((prev) => ({ ...prev, [item]: valor }));
    };

    const handleSave = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            const resposta = await ItemService.update(id, item); // Atualiza os dados do usuário
            localStorage.setItem("item", JSON.stringify(resposta)); // Armazena no localStorage
            setEditando(true); // Define como editando
            alert("Usuário atualizado com sucesso!"); // Mensagem de sucesso
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao atualizar usuário."); // Mensagem de erro
        }
    };
    
    
    return (
        <>
                   <Helmet><title>Editar Item</title></Helmet>
            <Menu ativo='Itens' />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                <form className="row g-3" onSubmit={(e) => {
                        e.preventDefault()
                        requisitar("economy/item/alterar", {...item, ...valor})
                    }}>
                        <div className="col-md-3">
                            <label htmlFor="inputId" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputId"
                                value={item?.id || ''}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCategoria" className="form-label">Categoria:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputValor"
                                name="categoria"
                                value={valor.categoria || '' }
                                onChange={mudar("categoria")}
                               
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputNome" className="form-label">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={valor.nome || ''}
                                onChange={mudar("nome")}
                                
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputDescricao" className="form-label">descricao:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                name="obs"
                                value={valor.descricao || ''}
                                onChange={mudar("descricao")}
                              
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">texto_introdutorio:</label>
                            <input
                                type="text"
                                id="inputAcesso"
                                className="form-control"
                                name="item_id"
                                value={valor.textointrodutorio || ''}
                                onChange={mudar("textointrodutorio")}
                            
                            />
                               
                            
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem(Catalogo):</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.imagem || ''}
                                onChange={mudar("imagem")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.imagem1 || ''}
                                onChange={mudar("imagem1")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.imagem2 || ''}
                                onChange={mudar("imagem2")}
                                
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Imagem3:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.imagem1 || ''}
                                onChange={mudar("imagem3")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Populacao:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.populacao || ''}
                                onChange={mudar("populacao")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Motivo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.motivo || ''}
                                onChange={mudar("motivo")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Metadenome1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.metadenome1 || ''}
                                onChange={mudar("metadenome1")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Metadenome2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.metadenome2 || ''}
                                onChange={mudar("metadenome2")}
                                
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status_item:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={valor.statusItem || ''}
                                onChange={mudar("statusItem")}
                                
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
