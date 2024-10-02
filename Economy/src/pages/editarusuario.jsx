import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import UsuarioService from "../services/UsuarioService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarUsuario = () => {
    const navigate = useNavigate();
    const { userId } = useParams(); // Pega o ID do usuário da URL
    const [user, setUser] = useState({
        id: '',
        nome: '',
        email: '',
        cpf: '',
        DataCadastro: '', 
        nivelAcesso: '',
        statusUsuario: '',
    });
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await UsuarioService.findById(id);
                setUser(data);
            } catch (error) {
                setMensagem('Erro ao buscar usuário.');
            }
        };

        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UsuarioService.update(userId, user);
            setMensagem('Usuário atualizado com sucesso!');
            navigate('/usuarios'); // Redireciona para a lista de usuários ou outra página
        } catch (error) {
            setMensagem('Erro ao atualizar usuário.');
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
                                value={user.id}
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
                                value={user.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputData" className="form-label">Cadastro:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={user.DataCadastro}
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
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputAcesso" className="form-label">Acesso:</label>
                            <select
                                id="inputAcesso"
                                className="form-select"
                                name="acesso"
                                value={user.nivelAcesso}
                                onChange={handleChange}
                            >
                                <option value="">Nível de Acesso</option>
                                <option value="admin">Admin</option>
                                <option value="user">Usuário</option>
                                
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputStatus" className="form-label">Status:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatus"
                                value={user.statusUsuario}
                                readOnly
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
                    {mensagem && <p className="mt-2">{mensagem}</p>}
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default EditarUsuario;
