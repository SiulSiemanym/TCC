import http from '../common/http-common';
const API_URL = "/economy/usuario/";

const findAll = () => {
    return http.mainInstance
        .get(API_URL + 'findAll');
};

const UsuarioService = {
    findAll,
    findById,
}

const findById = (id) => {
    return http.mainInstance
    .get(API_URL + `findById/${id}`);
}

export default UsuarioService;