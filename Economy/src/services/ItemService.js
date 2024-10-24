import http from '../common/http-common';
const API_URL = "/economy/item/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const update = async (id, data) => {
    try {
        const formData = new FormData();
        formData.append('categoria', data.categoria);
        formData.append('nome', data.nome);
        formData.append('descricao', data.descricao);
        formData.append('textointrodutorio', data.textointrodutorio);
        formData.append('imagem', data.imagem);
        formData.append('imagem1', data.imagem1);
        formData.append('imagem2', data.imagem2);
        formData.append('imagem3', data.imagem3);
        formData.append('populacao', data.populacao);
        formData.append('motivo', data.motivo);
        formData.append('metadenome1', data.metadenome1);
        formData.append('metadenome2', data.metadenome2);
        formData.append('statusItem', data.statusItem);
   


       

        const response = await http.mainInstance.put(API_URL + `update/${id}`, formData);
        return response.data; // Retorna os dados atualizados
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error; // Propaga o erro
    }
};

const create = (data) => {
    const formData = new FormData();
    formData.append('categoria', data.categoria);
    formData.append('nome', data.nome);
    formData.append('descricao', data.descricao);
    formData.append('textointrodutorio', data.textointrodutorio);
    formData.append('imagem', data.imagem);
    formData.append('imagem1', data.imagem1);
    formData.append('imagem2', data.imagem2);
    formData.append('imagem3', data.imagem3);
    formData.append('populacao', data.populacao);
    formData.append('motivo', data.motivo);
    formData.append('link', data.link);
    formData.append('metadenome1', data.metadenome1);
    formData.append('metadenome2', data.metadenome2);
    formData.append('statusItem', data.statusItem);
    

    return http.mainInstance.post(API_URL + "create", formData);
};

const ItemService = {
    findAll,
    findById,
     create,
     update,
}

export default ItemService