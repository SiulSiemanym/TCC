import { Helmet } from "react-helmet";
import Css from '../Css/editarperfil.module.css';
import Perfil from '../assets/Imagens/Menu/Perfil.png';
import { useState, useRef, useEffect } from "react";
import Menu from '../components/menu';
import FOOOTER from "../components/footer.jsx";
import useForm from "../hooks/useForm.jsx";
import axios from "axios";
import useRequisitar from "../hooks/useRequisitar.jsx";
import { useNavigate } from "react-router-dom";
import Fundo from "../components/fundo";

export default function EditarPerfil({ setProfileImage }) {
    const usuarioJSON = localStorage.getItem("usuario");
    const usuario = JSON.parse(usuarioJSON);
    const { mudar, valor } = useForm({ nome: usuario.nome, email: usuario.email, cpf: usuario.cpf, senha: usuario.senha });
    const [usuarioDados] = useRequisitar(`economy/usuario/findByEmail/${usuario.email}`);
    const [image, setImage] = useState(usuario?.foto || null);
    const inputFile = useRef(null);
    const navigate = useNavigate();
    const [editando, setEditando] = useState(true);

    useEffect(() => {
        if (usuarioDados) {
            setImage(usuarioDados.foto);
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

                    setImage(base64Image);
                    navigate(0);
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
            <Fundo>
                <Menu profileImage={image || Perfil} />
                <div className={`${Css.jorge}`} style={{ position: "relative" }}>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const resposta = await axios.post("http://localhost:8080/economy/usuario/alterar", { ...usuarioDados, ...valor });
                        localStorage.setItem("usuario", JSON.stringify(resposta.data));
                        navigate(0);
                    }}>
                        <div className={`${Css.conteudocarta}`}>
                            <div className={`${Css.carta} ${Css.aiaiborda}`} style={{ width: 300, backgroundColor: "#2b3035" }}>
                                <div className={Css.centralizar}>
                                    <img
                                        className={`${Css.profileImage}`}
                                        src={image || Perfil}
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
        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable} ${!editando ? Css.inputWhite : ''} ${!editando ? Css.inputTextBlack : ''}`}
        type="text"
        value={valor.nome}
        disabled={editando}
        onChange={mudar("nome")}
    />
</div>
<p className="mb-0">CPF:</p>
<div>
    <input
        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable} ${!editando ? Css.inputWhite : ''} ${!editando ? Css.inputTextBlack : ''}`}
        type="text"
        value={valor.cpf}
        disabled={editando}
        onChange={mudar("cpf")}
    />
</div>
<p className="mb-0">Email:</p>
<div>
    <input
        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable} ${!editando ? Css.inputWhite : ''} ${!editando ? Css.inputTextBlack : ''}`}
        type="text"
        value={valor.email}
        onChange={mudar("email")}
        disabled={editando}
    />
</div>
<p className="mb-0">Senha:</p>
<div>
    <input
        className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable} ${!editando ? Css.inputWhite : ''} ${!editando ? Css.inputTextBlack : ''}`}
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
                                                    setEditando(true);
                                                }}
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                id="saveButton"
                                                className={`${Css.button} ${Css.savebutton} btn btn-secondary`}
                                                style={{ width: "99px" }}
                                                onClick={async () => {
                                                    const resposta = await axios.post("http://localhost:8080/economy/usuario/alterar", { ...usuario, ...valor });
                                                    localStorage.setItem("usuario", JSON.stringify(resposta.data));
                                                    setEditando(true);
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
            </Fundo>
        </>
    );
}
