import { Helmet } from "react-helmet";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../Menu/Sidebar";
import Menu from "../components/menu";
import CatalogoService from "../services/CatalogoService";




const TabelaCatalogo = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/catalogoeditar')
    }

    const [catalogos, setCatalogos] = useState([]);

    useEffect(() => {
       CatalogoService.findAll().then(
            (response) => {
                const catalogos = response.data;
                setCatalogos(catalogos);
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
                    title={'Catálogo'}
                    
                />                                                   
                <section className="m-2 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">DataCadastro</th>
                                    <th scope="col">obs</th>
                                    <th scope="col">item_id</th>
                                    <th scope="col">StatusItem</th>                                                                                             
                                    <th scope="col">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {catalogos?.map((catalogo) => (
                                    <tr className="" key={catalogo.id}>
                                        <td>{catalogo.id}</td>
                                        <td>{catalogo.dataCadastro}</td>
                                        <td>{catalogo.obs}</td>
                                        <td>{catalogo.item_id}</td>
                                        <td>{catalogo.statusItem}</td>
                    
                                       
                                        <td>
                                            <button onClick={() => editar(catalogos.id)}
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

export default TabelaCatalogo