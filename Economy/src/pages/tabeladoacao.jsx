import { Helmet } from "react-helmet";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../Menu/Sidebar";
import Menu from "../components/menu";
import DoacaoService from "../services/DoacaoService";




const TabelaDoacao = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/doacaoeditar')
    }

    const [doacoes, setDoacoes] = useState([]);

    useEffect(() => {
        DoacaoService.findAll().then(
            (response) => {
                const doacoes = response.data;
                setDoacoes(doacoes);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const editar = (id) => {
        navigate(`/doacaoeditar/` + id)
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Menu
                    goto={'/usuario'}
                    title={'Lista de Doações'}
                    
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">DataCadastro</th>
                                    <th scope="col">obs</th>
                                    <th scope="col">valor</th>
                                    <th scope="col">usuario_id</th>
                                    <th scope="col">StatusUsuario</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doacoes?.map((doacao) => (
                                    <tr className="" key={doacao.id}>
                                        <td>{doacao.id}</td>
                                        <td>{doacao.dataCadastro}</td>
                                        <td>{doacao.obs}</td>
                                        <td>{doacao.valor}</td>
                                        <td>{doacao.usuario_id}</td>
                                        <td>{doacao.statusDoacao}</td>
                                       
                                        <td>
                                            <button onClick={() => editar(doacoes.id)}
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
    )
}

export default TabelaDoacao


