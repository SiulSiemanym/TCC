import { Helmet } from "react-helmet";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../Menu/Sidebar";
import Menu from "../components/menu";
import DoacaoService from "../services/DoacaoService";




const TabelaDoacao = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/editardoacao/')
    }

    const [doacao, setDoacao] = useState([]);

    useEffect(() => {
       DoacaoService.findAll().then(
            (response) => {
                const doacao = response.data;
                setDoacao(doacao);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const editar = (id) => {
        navigate(`/editardoacao/${id}`)
    }

    return (
       <>
           <Helmet><title>Tabela de Doações</title></Helmet>
           <Menu ativo='Doação' />
       <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                
                <section className="m-2 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Dia da efetuação</th>
                                    <th scope="col">Destinátario</th>
                                    <th scope="col">valor</th>
                                    <th scope="col">Nome do doador</th>
                                    <th scope="col">Status da Doação</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doacao?.map((doacao) => (
                                    <tr className="" key={doacao.id}>
                                        <td>{doacao.id}</td>
                                        <td>{doacao.dataCadastro}</td>
                                        <td>{doacao.obs}</td>
                                        <td>{doacao.valor}</td>
                                        <td>{doacao.usuario_id}</td>
                                        <td>{doacao.statusDoacao}</td>
                                       
                                        <td>
                                            <button onClick={() => editar(doacao.id)}
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

export default TabelaDoacao


