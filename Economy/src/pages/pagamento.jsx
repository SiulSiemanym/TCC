import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Css from "../Css/pagamento.module.css"
import Menu from "../components/menu"
import Pé from "../components/footer"
import back from "../assets/Imagens/Inicio/fundo-branco-com-folhas-verdes-isoladas-nos-cantos-e-espaco-de-copia-no-meio_373887-273.jpg";

const Pagamento = () => {
  const [nome, setNome] = useState('');
  const [userId, setUserId] = useState(''); // Novo estado para o ID do usuário
  const [animal, setAnimal] = useState('invalido');
  const [nomeAviso, setNomeAviso] = useState(false);
  const [animalAviso, setAnimalAviso] = useState(false);

  // UseEffect para definir o nome e o ID do usuário logado
  useEffect(() => {
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
      const usuario = JSON.parse(usuarioJSON);
      setNome(usuario.nome); // Define o nome do usuário logado
      setUserId(usuario.id); // Define o ID do usuário logado
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nome === '') {
      setNomeAviso(true);
    } else {
      setNomeAviso(false);
    }

    if (animal === 'invalido') {
      setAnimalAviso(true);
    } else {
      setAnimalAviso(false);
    }

    if (nome !== '' && animal !== 'invalido') {
      // Redirecionar para o Mercado Pago
      window.location.href = 'http://link.mercadopago.com.br/economy';
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
                  value={nome} // Vincula o valor do input ao estado
                  onChange={(e) => setNome(e.target.value)} // Atualiza o estado ao digitar
                />
                {nomeAviso && (
                  <p className={Css.nomeaviso} style={{ color: 'rgb(245, 84, 84)', fontWeight: 'bold', marginTop: '10px', textDecoration: 'underline' }}>
                    Preencha este campo obrigatório!
                  </p>
                )}
              </div>

              {/* Campo para exibir o ID do usuário */}
              <div className="mb-3">
                <label className="form-label"><span className={Css.verde}>Seu</span><span className={Css.branco}> ID:</span></label>
                <input
                  type="text"
                  className={`form-control ${Css.recebernome}`}
                  id="userId"
                  value={userId} // Exibe o ID do usuário
                  readOnly // Não pode ser editado
                />
              </div>

              <div className="mb-3" style={{ marginTop: '20px', marginBottom: '50px' }}>
                <label className="form-label"><span className={Css.verde}>Selecione quem</span><span className={Css.branco}> vai receber a doação!</span></label>
                <select
                  id="animal-select"
                  className={`form-select ${Css.animalselect}`}
                  value={animal}
                  onChange={(e) => setAnimal(e.target.value)}
                >
                  <option value="invalido">Selecione o animal/habitat que você queira doar!</option>
                  <option value="Panda">Panda</option>
                  <option value="Girafa">Girafa</option>
                  <option value="Arara Azul">Arara Azul</option>
                  <option value="Rinoceronte Branco">Rinoceronte Branco</option>
                  <option value="Onça Pintada">Onça Pintada</option>
                  <option value="Pinguim Africano">Pinguim Africano</option>
                  <option value="Lobo Guará">Lobo Guará</option>
                  <option value="Floresta Amazônica">Floresta Amazônica</option>
                  <option value="Recifes de Corais">Recifes de Corais</option>
                  <option value="Manguezais">Manguezais</option>
                  <option value="Savana">Savana</option>
                  <option value="Mata Atlântica">Mata Atlântica</option>
                </select>
              </div>

              <div className={Css.botoesalinhados}>
                <button type="submit" id="submit-mercadoPago" className="btn btn-secondary">Ir para o Mercado Pago!</button>
                <Link to='/'>
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
