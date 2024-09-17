import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useState, useEffect } from "react"



const UsuariosLista = () => {
  const navigate = useNavigate();
  const goto = () => {
      navigate('/usuarioeditar');
  }
  const [usuarios, setUsuarios] = useState([]);

  useEffect ( () => {
      UsuarioService.getAllUsuarios().then(
          (response) => {
              const usuarios = response.data;
              setUsuarios(usuarios);
              console.log(usuarios);
          }
      ).catch((error) => {
          console.log(error);
      })
  }, [] );

  return (
      <div className="d-flex">
          <Sidebar />
          <div className="p-2 w-100">
              <Header goto={'/usuario'}  
                  title={'Lista de Usuários'}
                  logo={logo}
              />
              <section className="m-2 p-3 shadow-lg">
                  <div>
                      <table className="table table-striped table-hover">
                          <thead>
                              <tr>
                                  <th scope="col">nome</th>
                                  <th scope="col">cpf</th>
                                  <th scope="col">email</th>
                                  <th scope="col">Senha</th>
                                  <th scope="col">NivelAcesso</th>
                                  <th scope="col">foto</th>
                                  <th scope="col">dataCadastro</th>
                                  <th scope="col">statusUsuario</th>
                                  <th scope="col">Abrir</th>
                              </tr>
                          </thead>
                          <tbody>
                             
                              {usuarios?.map((usuario) => (
                                  <tr key={usuario.id}>
                                  <td scope="row">{usuario.id}</td>
                                  <td>{usuario.nome}</td>
                                  <td>{usuario.cpf}</td>
                                  <td>{usuario.email}</td>
                                  <td>{usuario.senha}</td>
                                  <td>{usuario.nivelAcesso}</td>
                                  <td>{usuario.foto}</td>
                                  <td>{usuario.dataCadastro}</td>
                                  <td>{usuario.statusUsuario}</td>
                                  <td>
                                      <button type="button" onClick={() => goto()}
                                          className="btn btn-sm btn-success">
                                          <i className="bi bi-envelope-open me-2"></i>Abrir
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
export default UsuariosLista