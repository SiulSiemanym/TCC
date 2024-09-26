import http from '../common/http-common';
const API_URL = "/economy/item/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};
const ItemService = {
    findAll,
    findById,

}

export default ItemService