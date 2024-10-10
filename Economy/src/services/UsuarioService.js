import http from '../common/http-common';
const API_URL = "/economy/usuario/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signin = async (email, senha) => {
    const response = await http.mainInstance.post(API_URL + "signin", { email, senha });
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

const create = (data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('email', data.email);
    formData.append('senha', data.senha);
    formData.append('cpf', data.cpf);
    formData.append('foto', data.foto);
    formData.append('nivelAcesso', data.nivelAcesso);
    formData.append('DataCadastro', data.DataCadastro);
    formData.append('statusUsuario', data.statusUsuario);

    return http.mainInstance.post(API_URL + "create", formData);
};

// Ajustado para receber `data`
const update = async (id, data) => {
    try {
        const formData = new FormData();
        formData.append('nome', data.nome);
        formData.append('email', data.email);
        formData.append('senha', data.senha);
        formData.append('cpf', data.cpf);
        formData.append('foto', data.foto);
        formData.append('nivelAcesso', data.nivelAcesso);
        formData.append('DataCadastro', data.DataCadastro);
        formData.append('statusUsuario', data.statusUsuario);

        const response = await http.mainInstance.put(API_URL + `update/${id}`, formData);
        return response.data; // Retorna os dados atualizados
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error; // Propaga o erro
    }
};

const alterarSenha = (id, data) => {
    const formData = new FormData();
    formData.append('senha', data.senha);

    return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const findByEmail = (email) => {
    return http.mainInstance.get(API_URL + `findByNome?nome=${email}`);
};

const UsuarioService = {
    findAll,
    findById,
    signin,
    logout,
    getCurrentUser,
    create,
    update, // Usado para atualizar o usuário
    alterarSenha,
    findByEmail,
};

export default UsuarioService;
