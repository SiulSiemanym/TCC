const EditarItem = () => {
    const navigate = useNavigate();
    const objectValues = {
        categoria: "",
        nome: "",
        descricao: "",
        textointrodutorio: "",
        imagem: "",
        imagem1: "",
        imagem2: "",
        imagem3: "",
        populacao: "",
        link: "",
        metadenome1: "",
        metadenome2: "",
        statusItem: "",
    };

    const { requisitar } = useEnviar((dados) => {
        if (dados.id == item?.id) {
            navigate('/tabelaitem');
        }
    });

    const { mudar, valor, mudarDireto } = useForm(objectValues);
    const { id } = useParams(); // Pegando o id da URL
    const [item, setItem] = useState(undefined);
    const [editar, setEditando] = useState(true); // Controla se está editando

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await ItemService.findById(id);
                setItem(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchItem();
    }, [id]);

    useEffect(() => {
        if (item) {
            mudarDireto("categoria", item.categoria);
            mudarDireto("nome", item.nome);
            mudarDireto("descricao", item.descricao);
            mudarDireto("textointrodutorio", item.textointrodutorio);
            mudarDireto("imagem", item.imagem);
            mudarDireto("imagem1", item.imagem1);
            mudarDireto("imagem2", item.imagem2);
            mudarDireto("imagem3", item.imagem3);
            mudarDireto("populacao", item.populacao);
            mudarDireto("link", item.link);
            mudarDireto("metadenome1", item.metadenome1);
            mudarDireto("metadenome2", item.metadenome2);
            mudarDireto("statusItem", item.statusItem);
        }
    }, [item]);

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setItem((prev) => ({
                ...prev,
                [name]: files[0], // Guardamos o arquivo no estado
            }));
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData(); // Usamos FormData para envio multipart/form-data

        formData.append("categoria", item.categoria);
        formData.append("nome", item.nome);
        formData.append("descricao", item.descricao);
        formData.append("textointrodutorio", item.textointrodutorio);
        formData.append("imagem", item.imagem);
        formData.append("imagem1", item.imagem1);
        formData.append("imagem2", item.imagem2);
        formData.append("imagem3", item.imagem3);
        formData.append("populacao", item.populacao);
        formData.append("link", item.link);
        formData.append("metadenome1", item.metadenome1);
        formData.append("metadenome2", item.metadenome2);
        formData.append("statusItem", item.statusItem);
        formData.append("motivo", item.motivo);

        try {
            const resposta = await ItemService.update(id, formData); // Usamos FormData para enviar
            localStorage.setItem("item", JSON.stringify(resposta));
            setEditando(true);
            alert("Item atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao atualizar item.");
        }
    };

    return (
        <>
            <Helmet><title>Editar Item</title></Helmet>
            <Menu ativo="Itens" />
            <div className="d-flex">
                <section className="m-2 p-3 shadow-lg">
                    <form className="row g-3" onSubmit={handleSave}>
                        <div className="col-md-3">
                            <label htmlFor="inputId" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputId"
                                value={item?.id || ''}
                                readOnly
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputCategoria" className="form-label">Categoria:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCategoria"
                                name="categoria"
                                value={valor.categoria || ''}
                                onChange={mudar("categoria")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputNome" className="form-label">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNome"
                                name="nome"
                                value={valor.nome || ''}
                                onChange={mudar("nome")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputDescricao" className="form-label">Descrição:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputDescricao"
                                name="descricao"
                                value={valor.descricao || ''}
                                onChange={mudar("descricao")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputMotivo" className="form-label">Motivo:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputDescricao"
                                name="motivo"
                                value={valor.motivo || ''}
                                onChange={mudar("motivo")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputTextointrodutorio" className="form-label">Texto Introdutório:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputTextointrodutorio"
                                name="textointrodutorio"
                                value={valor.textointrodutorio || ''}
                                onChange={mudar("textointrodutorio")}
                            />
                        </div>

                        {/* Campos de upload de imagem */}
                        <div className="col-md-6">
                            <label htmlFor="inputImagem" className="form-label">Imagem (Catalogo):</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem"
                                name="imagem"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputImagem1" className="form-label">Imagem 1:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem1"
                                name="imagem1"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputImagem2" className="form-label">Imagem 2:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem2"
                                name="imagem2"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputImagem3" className="form-label">Imagem 3:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagem3"
                                name="imagem3"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPopulacao" className="form-label">População:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputPopulacao"
                                name="populacao"
                                value={valor.populacao || ''}
                                onChange={mudar("populacao")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputLink" className="form-label">Link de Acesso:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputLink"
                                name="link"
                                value={valor.link || ''}
                                onChange={mudar("link")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputMetadenome1" className="form-label">Metadenome 1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMetadenome1"
                                name="metadenome1"
                                value={valor.metadenome1 || ''}
                                onChange={mudar("metadenome1")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputMetadenome2" className="form-label">Metadenome 2:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMetadenome2"
                                name="metadenome2"
                                value={valor.metadenome2 || ''}
                                onChange={mudar("metadenome2")}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputStatusItem" className="form-label">Status Item:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputStatusItem"
                                name="statusItem"
                                value={valor.statusItem || ''}
                                onChange={mudar("statusItem")}
                            />
                        </div>

                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                            <button type="button" className="btn btn-danger">
                                Deletar Item
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <FOOOTER className={`${CSS.alinhar}`} />
        </>
    );
};

export default EditarItem;
