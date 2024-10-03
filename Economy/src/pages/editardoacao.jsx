import React, { useEffect, useState } from 'react';
import Menu from "../components/menu";
import FOOOTER from '../components/footer';
import CSS from "../Css/esquecisenha.module.css";  
import DoacaoService from "../services/DoacaoService"; 
import { useNavigate, useParams } from "react-router-dom";

const EditarUsuario = () => {
    const navigate = useNavigate();
    const { doacaoId } = useParams(); // Pega o ID do usuário da URL
    const [doacao, setDoacao] = useState({
        id: '',
        DataCadastro: '',
        obs: '',
        valor: '',
        usuario_id: '', 
        statusDoacao: '',
    });
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const fetchdoacao = async () => {
            try {
                const data = await DoacaoService.findById(id);
                setDoacao(data);
            } catch (error) {
                setMensagem('Erro ao buscar Doação Efetuada.');
            }
        };

        fetchdoacao();
    }, [doacaoId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoacao({ ...doacao, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UsuarioService.update(doacaoId, doacao);
            setMensagem('Doação atualizada com sucesso!');
            navigate('/usuarios');
        } catch (error) {
            setMensagem('Erro ao atualizar doação.');
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                    {mensagem && <p className="mt-2">{mensagem}</p>}
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhasafada}`} />
        </>
    );
};

export default EditarUsuario;
