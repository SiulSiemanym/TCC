import { Helmet } from "react-helmet";
import Css from '../Css/editarperfil.module.css';
import Perfil from '../assets/Imagens/Menu/Perfil.png';
import { useState, useRef } from "react";
import Menu from '../components/menu';
import FOOOTER from "../components/footer.jsx";

export default function EditarPerfil({ setProfileImage }) {
    const [image, setImage] = useState(null);
    const inputFile = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImage(e.target.result);
                console.log(e.target.result)
                localStorage.setItem("imagem", e.target.result)
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Menu profileImage={image || Perfil} />
            <div className={`${Css.jorge}`} style={{ position: "relative" }}>
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
                        </div>
                    </div>
                    <div className={`${Css.carta} ${Css.aiaiborda1} ${Css.apareceobotaodudu} text-white`} style={{  }}>
                        <div className={`carta-text ${Css.cartatext}`}>
                            <p className="mb-0">Nome:</p>
                            <div>
                                <input
                                    className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                    type="text"
                                    defaultValue="Nome"
                                    readOnly
                                />
                            </div>
                            <p className="mb-0">CPF:</p>
                            <div>
                                <input
                                    className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                    type="text"
                                    defaultValue="CPF"
                                    readOnly
                                />
                            </div>
                            <p className="mb-0">Email:</p>
                            <div>
                                <input
                                    className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                    type="text"
                                    defaultValue="Email"
                                    readOnly
                                />
                            </div>
                            <p className="mb-0">Senha:</p>
                            <div>
                                <input
                                    className={`${Css.fixedcampo} ${Css.textinput} ${Css.editable}`}
                                    id="passwordField"
                                    type="password"
                                    defaultValue="Senha"
                                    readOnly
                                />
                            </div>
                            <button
                                id="editButton"
                                className={`button ${Css.button} ${Css.editbutton} btn btn-secondary`}
                                style={{ width: "99px" }}
                            >
                                Editar
                            </button>
                            <button
                                id="cancelButton"
                                className={`${Css.button} ${Css.cancelbutton} btn btn-secondary`}
                                style={{ width: "99px" }}
                            >
                                Cancelar
                            </button>
                            <button
                                id="saveButton"
                                className={`${Css.button} ${Css.savebutton} btn btn-secondary`}
                                style={{ width: "99px" }}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FOOOTER />
        </>
    );
}
