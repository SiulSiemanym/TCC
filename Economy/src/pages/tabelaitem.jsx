import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";
import Menu from "../components/menu";
import ItemService from "../services/ItemService";

const TabelaItem = () => {
    const navigate = useNavigate();

    const [itens, setItens] = useState([]);

    useEffect(() => {
        ItemService.findAll().then((response) => {
            const itens = response.data;
            setItens(itens);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const editar = (id) => {
        navigate(`/editaritem/${id}`); 
    };

    const criarNovoItem = () => {
        navigate('/criaritem'); // Altere o caminho conforme necessário
    };

    return (
        <>
            <Helmet><title>Tabela de Itens</title></Helmet>
            <Menu ativo='Itens' />
            <div className="d-flex">
                <Sidebar />
                <div className="p-3 w-100">
                  
                    <section className="m-2 p-2 shadow-lg">
                        <button 
                            onClick={criarNovoItem} 
                            className="btn btn-primary mb-3">
                            Criar Novo Item
                        </button>
                        <div className="table-wrapper">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Descrição</th>
                                        <th scope="col">Texto</th>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Imagem1</th>
                                        <th scope="col">Imagem2</th>
                                        <th scope="col">Imagem3</th>
                                        <th scope="col">População</th>
                                        <th scope="col">Link de acesso:</th>
                                        <th scope="col">metadenome1</th>
                                        <th scope="col">metadenome2</th>
                                        <th scope="col">StatusItem</th>
                                        <th scope="col">Abrir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itens?.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.categoria}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.descricao}</td>
                                            <td>{item.textointrodutorio}</td>
                                            <td style={{ width: "40vw" }}><img className="w-100" src={item.imagem} alt="" /></td>
                                            <td style={{width: "40vw"}}><img className="w-100" src={item.imagem1}/></td>
                                            <td style={{width: "40vw"}}><img className="w-100" src={item.imagem2}/></td>
                                            <td style={{width: "40vw"}}><img className="w-100" src={item.imagem3}/></td>
                                            <td>{item.populacao}</td>
                                            <td>{item.link}</td>
                                            <td>{item.metadenome1}</td>
                                            <td>{item.metadenome2}</td>
                                            <td>{item.statusItem}</td>
                                            <td>
                                                <button 
                                                    onClick={() => editar(item.id)} 
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
    );
};

export default TabelaItem;
