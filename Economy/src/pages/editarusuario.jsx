import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/editarusuario.module.css";  
import UsuarioService from "../services/UsuarioService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarUsuario = () => {
    const { id } = useParams(); // Pegando o id da URL
    const [usuario, setUsuario] = useState({});
    const [editar, setEditando] = useState(false); // Controla se está editando

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await UsuarioService.findById(id);
                setUsuario(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsuario();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            const resposta = await UsuarioService.update(id, usuario); // Atualiza os dados do usuário
            localStorage.setItem("usuario", JSON.stringify(resposta)); // Armazena no localStorage
            setEditando(true); // Define como editando
            alert("Usuário atualizado com sucesso!"); // Mensagem de sucesso
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao atualizar usuário."); // Mensagem de erro
        }
    };

    return (
        <>
            <Helmet><title>Editar Usuário</title></Helmet>
            <Menu />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSave}>
                        <div className="col-md-3">
                            <label htmlFor="inputId" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputId"
                                value={usuario.id || ''}
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
                                value={usuario.nome || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputData" className="form-label">Cadastro:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={usuario.dataCadastro || ''}
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
                                value={usuario.email || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">Acesso:</label>
                            <select
                                id="inputAcesso"
                                className="form-select"
                                name="nivelAcesso"
                                value={usuario.nivelAcesso || ''}
                                onChange={handleChange}
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
                                name="statusUsuario"
                                value={usuario.statusUsuario || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <button
                                type="submit"
                                className={`${CSS.button} ${CSS.savebutton} btn btn-secondary`}
                                style={{ width: "99px" }}
                            >
                                Salvar
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
            <FOOOTER className={`${CSS.alinhar}`} />
        </>
    );
};

export default EditarUsuario;
