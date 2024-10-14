import http from '../common/http-common';
const API_URL = "/economy/doacao/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = (data) => {
    return http.mainInstance.post(API_URL + 'create', data);
};

const DoacaoService = {
    findAll,
    findById,
    create,
};

export default DoacaoService;
