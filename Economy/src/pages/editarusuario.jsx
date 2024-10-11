import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/editarusuario.module.css";
import UsuarioService from "../services/UsuarioService";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm"
import useEnviar from "../hooks/useEnviar.jsx"

const EditarUsuario = () => {

    const navigate = useNavigate();
    const objectValues = {
        nome: "",
        email: "",
        nivelAcesso: "",
        statusUsuario: "",
        senha: "",
    }

    const { requisitar } = useEnviar((dados) => {
        if (dados.id == usuario?.id) {

        }
        navigate('/usuariotabela')
    })

    const { mudar, valor, mudarDireto } = useForm(objectValues)

    const { id } = useParams(); // Pegando o id da URL
    const [usuario, setUsuario] = useState(undefined);
    const [editar, setEditando] = useState(true); // Controla se está editando

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

    useEffect(() => {
        if (usuario) {
            console.log(usuario);
            console.log(usuario.senha);
            
            mudarDireto("email", usuario.email);
            mudarDireto("nivelAcesso", usuario.nivelAcesso);
            mudarDireto("nome", usuario.nome);
    
            // Atribui a senha diretamente sem decodificação
            mudarDireto("senha", usuario.senha);
    
            mudarDireto("statusUsuario", usuario.statusUsuario);
        }
    }, [usuario]);
    
    

    const handleChange = (e) => {
        const { nome, valor } = e.target;
        setUsuario((prev) => ({ ...prev, [nome]: valor }));
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
            <Menu ativo='Tabela'/>
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={(e) => {
                        e.preventDefault()
                        requisitar("economy/usuario/alterar", {...usuario, ...valor})
                    }}>
                        <div className="col-md-3">
                            <label htmlFor="inputId" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputId"
                                value={usuario?.id || ''}
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
                                value={valor.nome || ''}
                                onChange={mudar("nome")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputSenha" className="form-label">Senha:</label>
                            <input
    type="text" // Altere para 'text' para mostrar a senha
    className="form-control"
    id="inputSenha"
    name="senha"
    value={valor.senha || ''}
    onChange={mudar("senha")}
/>

                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputData" className="form-label">Cadastro:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={usuario?.dataCadastro|| ''}
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
                                value={valor.email || ''}
                                onChange={mudar("email")}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">Acesso:</label>
                            <select
                                id="inputAcesso"
                                className="form-select"
                                name="nivelAcesso"
                                value={valor.nivelAcesso}
                                onChange={mudar("nivelAcesso")}
                            >
                                <option value="USER">Usuario</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status:</label>
                            <select
                                id="inputAcesso"
                                className="form-select"
                                name="statusUsuario"
                                value={valor.statusUsuario}
                                onChange={mudar("statusUsuario")}
                            >

                                <option value="ATIVO">ATIVO</option>
                                <option value="INATIVO">INATIVO</option>
                            </select>
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <button
                                type="submit"
                                className={`${CSS.button} ${CSS.savebutton} btn btn-secondary`}
                                style={{ width: "99px" }}
                            >
                                Salvar
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
