import http from '../common/http-common';
const API_URL = "/economy/doacao/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};
const DoacaoService = {
    findAll,
    findById,

}

export default DoacaoService