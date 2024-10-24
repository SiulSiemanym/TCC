import http from '../common/http-common'; 
const API_URL = "/economy/doacao/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const update = async (id, data) => {
    try {
        const formData = new FormData();
        formData.append('nome', data.nome);
        formData.append('valor', data.valor);
        formData.append('dataCadastro', data.dataCadastro);
        formData.append('obs', data.obs);
        formData.append('statusDoacao', data.statusDoacao);
        formData.append('usuario_id', data.usuario_id);

        const response = await http.mainInstance.put(API_URL + `update/${id}`, formData);
        return response.data; // Retorna os dados atualizados
    } catch (error) {
        console.error("Erro ao atualizar doação:", error);
        throw error; // Propaga o erro
    }
};

const create = (data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('valor', data.valor);
    formData.append('dataCadastro', new Date().toISOString());
    formData.append('obs', data.obs);
    formData.append('statusDoacao', data.statusDoacao);
    formData.append('usuario_id', data.usuario_id);

    return http.mainInstance.post(API_URL + "create", formData);
};

const DoacaoService = {
    findAll,
    findById,
    create,
    update,
};

export default DoacaoService;
