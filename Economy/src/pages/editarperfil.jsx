import { Helmet } from "react-helmet";
import Css from '../Css/editarperfil.module.css';
import Perfil from '../assets/Imagens/Menu/Perfil.png';
import { useState, useRef, useEffect } from "react";
import Menu from '../components/menu';
import FOOOTER from "../components/footer.jsx";
import useForm from "../hooks/useForm.jsx";
import axios from "axios";
import useRequisitar from "../hooks/useRequisitar.jsx";
import { useNavigate, } from "react-router-dom";

export default function EditarPerfil({ setProfileImage }) {
    const usuarioJSON = localStorage.getItem("usuario");
    const usuario = JSON.parse(usuarioJSON);
    const { mudar, valor } = useForm({ nome: usuario.nome, email: usuario.email, cpf: usuario.cpf, senha: usuario.senha });
    const [usuarioDados] = useRequisitar(`economy/usuario/findByEmail/${usuario.email}`);
    const [image, setImage] = useState(usuario?.foto || null); // Inicializa com a foto do usuário
    const inputFile = useRef(null);
    const navigate = useNavigate();
    const [editando, setEditando] = useState(true);
    // Atualiza a imagem quando usuarioDados muda (ou seja, quando o componente é montado)
    useEffect(() => {
        if (usuarioDados) {
            setImage(usuarioDados.foto); // Atribui a imagem recuperada do banco de dados
        }
    }, [usuarioDados]);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async function (e) {
                const base64Image = e.target.result;
                
                try {
                    const response = await axios.post("http://localhost:8080/economy/usuario/alterarFoto", {
                        email: usuario.email,
                        foto: base64Image
                    });

                    console.log(response)

                    // Atualizar imagem no menu
                    setImage(base64Image); // Atualiza no Menu

                    // console.log('Imagem atualizada com sucesso');
                    navigate(0)
                } catch (error) {
                    console.error("Erro ao enviar a imagem", error);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
    };

    return (
        <>
                    <Helmet><title>Editar Perfil</title></Helmet>

            <Menu profileImage={image || Perfil} />
            <div className={`${Css.jorge}`} style={{ position: "relative" }}>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    console.log({ ...usuario, ...valor }.foto == image)
                    console.log({ ...usuario, ...valor }.foto)
                    const resposta = await axios.post("http://localhost:8080/economy/usuario/alterar", { ...usuarioDados, ...valor });
                    localStorage.setItem("usuario", JSON.stringify(resposta.data));
                    navigate(0);
                }}>
                    <div className={`${Css.conteudocarta}`}>
                        <div className={`${Css.carta} ${Css.aiaiborda}`} style={{ width: 300, backgroundColor: "#2b3035" }}>
                            <div className={Css.centralizar}>
                                <img
                                    className={`${Css.profileImage}`}
                                    src={image || Perfil} // Usa a imagem do banco de dados
                                    alt="Foto"
                                />
                                <label
                                    className={`button edit-button btn btn-secondary ${Css.editPhotoButton} ${Css.button} ${Css.editbutton} ${Css.chegajunto}`}
                                    htmlFor="photoInput"
                                >
                                    Editar Foto
                                </label>
                                <input
                                    ref={inputFile}
                                    onChange={handleImageChange}
                                    type="file"
                                    id="photoInput"
                                    className={`${Css.photoInput}`}
                                    accept="image/*"
                                    style={{ display: "none" }}
                                />
                                <button
                                    onClick={handleLogout}
                                    className={`button ${Css.button} ${Css.editbutton} btn btn-secondary`}
                                    style={{ width: "200px" }}
                                >
                                    Desconectar
                                </button>
                            </div>
                        </div>

                        <div className={`${Css.carta} ${Css.aiaiborda1} ${Css.apareceobotaodudu} text-white`}>
                            <div className={`carta-text ${Css.cartatext}`}>
                                <p className="mb-0">Nome:</p>
                                <div>
                                    <input
                                        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                        type="text"
                                        value={valor.nome}
                                        disabled={editando}
                                        onChange={mudar("nome")}
                                    />
                                </div>
                                <p className="mb-0">CPF:</p>
                                <div>
                                    <input
                                        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                        type="text"
                                        value={valor.cpf}
                                        disabled={editando}
                                        onChange={mudar("cpf")}
                                    />
                                </div>
                                <p className="mb-0">Email:</p>
                                <div>
                                    <input
                                        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                        type="text"
                                        value={valor.email}
                                        onChange={mudar("email")}
                                        disabled={editando}
                                    />
                                </div>
                                <p className="mb-0">Senha:</p>
                                <div>
                                    <input
                                        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                        id="passwordField"
                                        type="password"
                                        disabled={editando}
                                        value={valor.senha}
                                        onChange={mudar("senha")}
                                    />
                                </div>
                                {editando ? (
                                    <button
                                        id="editButton"
                                        className={`button ${Css.button} ${Css.editbutton} btn btn-secondary`}
                                        style={{ width: "99px" }}
                                        type="button"
                                        onClick={() => {
                                            setEditando(false);
                                        }}
                                    >
                                        Editar
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            id="cancelButton"
                                            className={`${Css.button} ${Css.cancelbutton} btn btn-secondary`}
                                            style={{ width: "99px" }}
                                            onClick={() => {
                                                setEditando(true); // Opcional: voltar ao modo de edição
                                            }}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            id="saveButton"
                                            className={`${Css.button} ${Css.savebutton} btn btn-secondary`}
                                            style={{ width: "99px" }}
                                            onClick={async () => {
                                                // Lógica para salvar as alterações
                                                const resposta = await axios.post("http://localhost:8080/economy/usuario/alterar", { ...usuario, ...valor });
                                                localStorage.setItem("usuario", JSON.stringify(resposta.data));
                                                setEditando(true); // Retornar ao modo de edição após salvar
                                            }}
                                        >
                                            Salvar
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <FOOOTER />
        </>
    );
}