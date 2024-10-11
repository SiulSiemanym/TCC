    import { Helmet } from "react-helmet";
    import UsuarioService from "../services/UsuarioService";
    import { useEffect, useState } from "react"
    import { useNavigate } from "react-router-dom"
    import Sidebar from "../Menu/Sidebar";
    import Menu from "../components/menu";
    import FOOOTER from "../components/footer"
    import CSS from "../Css/tabela.module.css"



    const Tabela = () => {

        const navigate = useNavigate();

    

        const [usuarios, setUsuarios] = useState([]);

        useEffect(() => {
            UsuarioService.findAll().then(
                (response) => {
                    const usuarios = response.data;
                    setUsuarios(usuarios);
                }
            ).catch((error) => {
                console.log(error);
            })
        }, []);

        const editar = (id) => {
            navigate(`/editarusuario/${id}`);
        }

        return (
        <>
                <Helmet><title>Tabela de Usuários</title></Helmet>

            <Menu ativo=''/> 
        <div className="d-flex">
            
                <div className="p-3 w-100">
                
                    <section className="m-2 p-2 shadow-lg">
                        <div className="table-wrapper">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Cpf</th>
                                        <th scope="col">Foto</th>
                                        <th scope="col">NivelAcesso</th>
                                        <th scope="col">DataCadastro</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Abrir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios?.map((usuario) => (
                                        <tr className="" key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td  className={`text-break ${CSS.largura}`}>{usuario.nome}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.cpf}</td>
                                            <td style={{ width: "20vw" }}><img className="w-100" src={usuario.foto} alt="" /></td>
                                            <td>{usuario.nivelAcesso}</td>
                                            <td>{usuario.dataCadastro}</td>
                                            <td>{usuario.statusUsuario}</td>
                                            <td>
                                                <button onClick={() => editar(usuario.id)}
                                                    className="btn btn-sm btn-warning rounded">
                                                    <i className="bi bi-envelope-open"> Editar</i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
            </>
        )
    }

    export default Tabela






