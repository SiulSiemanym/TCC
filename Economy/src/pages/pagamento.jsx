import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Css from "../Css/pagamento.module.css";
import Menu from "../components/menu";
import Pé from "../components/footer";
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";
import DoacaoService from '../services/DoacaoService';
import useRequisitar from '../hooks/useRequisitar';

const Pagamento = () => {
  const { item: itemNome } = useParams();
  const [item, carregando] = useRequisitar("economy/item/find/" + itemNome); 
  const [nome, setNome] = useState('');
  const [userId, setUserId] = useState('');
  const [valor, setValor] = useState('');
  const [obs, setObs] = useState('');
  const [nomeAviso, setNomeAviso] = useState(false);
  const [valorAviso, setValorAviso] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
      const usuario = JSON.parse(usuarioJSON);
      setNome(usuario.nome);
      setUserId(usuario.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setNomeAviso(nome === '');
    setValorAviso(valor === '');

    if (nome !== '' && valor !== '') {
      try {
        // Enviando os dados para o banco de dados
        await DoacaoService.create({
          nome,
          valor,
          obs: item?.nome, // O nome do animal ou habitat será salvo como observação
          statusDoacao: 'PAGO',
          usuario_id: userId
        });

        // Navegando para o Mercado Pago
        navigate(`/mercadoPagoLink`, { 
          state: { 
            nome, 
            valor, 
            obs: item?.nome, 
            userId 
          } 
        });
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        // Adicione uma mensagem de erro para o usuário, se necessário
      }
    }
  };

  return (
    <>
      <Helmet><title>Pagamento</title></Helmet>
      <div className={`${Css.backgroundimage}`} style={{ backgroundImage: `url(${back})` }}>
        <Menu />
        <div className={Css.saidepertodanavbar}>
          <div className={`card ${Css.card} mb-3 text-bg-dark text-left mx-auto ${Css.caixapagamento}`} style={{ width: '45%', backgroundColor: '#2b3035' }}>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
              <span className={Css.verde}>Realizar</span><span className={Css.branco}> Doação!</span>
            </h2>
            <form onSubmit={handleSubmit} style={{ width: '75%', marginLeft: '100px', marginTop: '50px', marginBottom: '50px' }}>
              <div className="mb-3">
                <label className="form-label"><span className={Css.verde}>Digite</span><span className={Css.branco}> seu nome:</span></label>
                <input
                  type="text"
                  className={`form-control ${Css.recebernome}`}
                  id="recebernome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                {nomeAviso && (
                  <p className={Css.nomeaviso} style={{ color: 'rgb(245, 84, 84)', fontWeight: 'bold', marginTop: '10px', textDecoration: 'underline' }}>
                    Preencha este campo obrigatório!
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label"><span className={Css.verde}>Seu</span><span className={`${Css.branco}`}> ID:</span></label>
                <input
                  type="text"
                  className={`form-control ${Css.recebernome}`}
                  id="userId"
                  value={userId}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><span className={Css.verde}>Você está</span><span className={`${Css.branco}`}> doando para:</span></label>
                <p className={`${Css.recebernome} ${Css.aumentarafonte}`}>{item?.nome}</p>
              </div>

              <div className="mb-3">
                <label className="form-label"><span className={Css.verde}>Digite</span><span className={Css.branco}> o valor da doação:</span></label>
                <input
                  type="number"
                  className={`form-control ${Css.recebernome}`}
                  id="valor"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
                {valorAviso && (
                  <p className={Css.nomeaviso} style={{ color: 'rgb(245, 84, 84)', fontWeight: 'bold', marginTop: '10px', textDecoration: 'underline' }}>
                    Preencha este campo obrigatório!
                  </p>
                )}
              </div>

              <div className={Css.botoesalinhados}>
                <button type="submit" className="btn btn-secondary">Ir para o Mercado Pago!</button>
                <Link to='/mercadoPagoLink'>
                  <button type="button" className="btn btn-secondary">Voltar</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Pé className={`${Css.sobe}`} />
      </div>
    </>
  );
};

export default Pagamento;
