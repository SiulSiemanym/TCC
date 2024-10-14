import React from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import ItemService from "../services/ItemService"; 
import { useNavigate } from "react-router-dom";
import useEnviar from "../hooks/useEnviar.jsx";
import useForm from "../hooks/useForm";
import { Helmet } from 'react-helmet';

const CriarItem = () => {
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
        statusItem: "",
    };

    const { mudar, valor } = useForm(objectValues);

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                mudar(fieldName)({ target: { value: reader.result } });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        console.log("Dados a serem enviados:", valor);
        try {
            const resposta = await ItemService.create(valor);
            alert("Item criado com sucesso!");
            navigate('/tabelaitem');
        } catch (error) {
            console.error("Erro ao criar:", error);
            alert("Erro ao criar item.");
        }
    };

    return (
        <>
            <Helmet><title>Criar Item</title></Helmet>
            <Menu ativo='Itens' />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSave}>
                        <div className="col-md-6">
                            <label htmlFor="inputCategoria" className="form-label">Categoria:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCategoria"
                                name="categoria"
                                value={valor.categoria}
                                onChange={mudar("categoria")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputNome" className="form-label">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNome"
                                name="nome"
                                value={valor.nome}
                                onChange={mudar("nome")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputDescricao" className="form-label">Descrição:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputDescricao"
                                name="descricao"
                                value={valor.descricao}
                                onChange={mudar("descricao")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputTexto" className="form-label">Texto Introdutório:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputTexto"
                                name="textointrodutorio"
                                value={valor.textointrodutorio}
                                onChange={mudar("textointrodutorio")}
                            />
                        </div>
                        {/* Campos para imagens */}
                        <div className="col-md-6">
                            <label htmlFor="inputImagem" className="form-label">Imagem:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, "imagem")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputImagem1" className="form-label">Imagem 1:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem1"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, "imagem1")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputImagem2" className="form-label">Imagem 2:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem2"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, "imagem2")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputImagem3" className="form-label">Imagem 3:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem3"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, "imagem3")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPopulacao" className="form-label">População:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputPopulacao"
                                name="populacao"
                                value={valor.populacao}
                                onChange={mudar("populacao")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputMotivo" className="form-label">Motivo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMotivo"
                                name="motivo"
                                value={valor.motivo}
                                onChange={mudar("motivo")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputMetadenome1" className="form-label">Metadenome 1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMetadenome1"
                                name="metadenome1"
                                value={valor.metadenome1}
                                onChange={mudar("metadenome1")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputMetadenome2" className="form-label">Metadenome 2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMetadenome2"
                                name="metadenome2"
                                value={valor.metadenome2}
                                onChange={mudar("metadenome2")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputStatusItem" className="form-label">Status Item:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatusItem"
                                name="statusItem"
                                value={valor.statusItem}
                                onChange={mudar("statusItem")}
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Criar Item
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <FOOOTER />
        </>
    );
};

export default CriarItem;
