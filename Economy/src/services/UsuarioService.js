import http from '../common/http-common';
const API_URL = "/economy/usuario/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};


const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const create = data => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('email', data.email);
    formData.append('nivelAcesso', data.nivelAcesso);

    return http.mainInstance.post(API_URL + "create", formData);
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const alterarSenha = (id, data) => {
    const formData = new FormData();
    formData.append('senha', data.senha);
 
    return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const findByEmail = email => {
    return http.mainInstance.get(API_URL + `findByNome?nome=${email}`);
};


const UsuarioService = {
    findAll,
    findById,
    signin,
    logout,
    getCurrentUser,
    create,
    update,
    alterarSenha,
    findByEmail,
}

export default UsuarioService;