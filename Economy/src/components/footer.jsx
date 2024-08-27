import { useState } from "react"

export default function Footer(){
    const [Mostrarfaleconosco, setMostrarfaleconosco] = useState(false)
    return(
        <footer>
        <div className="card text-left">
          <div className="card-header bg-secondary ">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <button
                  onClick={()=>setMostrarfaleconosco(false)}
                  id="contato"
                  className={`nav-link ${!Mostrarfaleconosco?"active bg-dark":""}  text-light border-dark`}
                  aria-current="true"
                >
                  Contato
                </button>
              </li>
              <li className="nav-item">
                <button
                 onClick={()=>setMostrarfaleconosco(true)}
                  id="fale-conosco"
                  className={`nav-link ${Mostrarfaleconosco?"active bg-dark":""} text-light`}
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body bg-dark text-light">
            {
                !Mostrarfaleconosco&&  <div  id="contato-conteudo">
                <img src="Recursos/Imagens/Menu/Logo.png" id="logo1" />
                <p>
                  <a href="#" className="card-text">
                    <img id="instagram" src="Recursos/Imagens/Footer/Instagram.png" />
                  </a>
                </p>
                <h5 className="card-text" id="email">
                  economyarrecadadora@gmail.com
                </h5>
                <h5 className="card-text">Telefone: (11)96353-8521</h5>
                <p />
              </div>
            }
           
            {
                Mostrarfaleconosco&& <div  id="fale-conosco-conteudo">
                <div className="mb-3 ">
                  <form
                    action="https://formsubmit.co/economyarrecadadora@gmail.com"
                    method="post"
                    className="form"
                    id="form"
                  >
                    <div className="form-content error">
                      <label htmlFor="formGroupExampleInput" className="form-label">
                        Email: (Caso o email seja posto incorretamente você não
                        receberá a sua resposta).
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        style={{ width: 610 }}
                        name="email"
                        placeholder="Exemplo: nome@dominio.com"
                        required=""
                      />
                      <div className="mb-3 col-md-4">
                        <label htmlFor="inputProblema" className="form-label">
                          Selecione o problema:
                        </label>
                        <select
                          className="form-select"
                          style={{ width: 610 }}
                          selected=""
                          name="problema"
                          required=""
                        >
                          <option>Escolha...</option>
                          <option>Erro no pagamento.</option>
                          <option>
                            O animal/planta que eu quero doar dinheiro não aparece.
                          </option>
                          <option>Excluir conta.</option>
                          <option>Outro.</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="formGroupExampleInput2"
                          className="form-label"
                        >
                          Descreva o problema:
                        </label>
                        <textarea
                          className="form-control"
                          style={{ width: 610, height: 250, textAlign: "start" }}
                          id="problemstext"
                          name="descrição"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="link_wrapper">
                      <button type="submit" id="botao2">
                        Enviar!
                      </button>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 268.832 268.832"
                        >
                          <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                        </svg>
                      </div>
                    </div>
                  </form>
                </div>
                <input
                  type="hidden"
                  name="_next"
                  defaultValue="http://localhost:5500/Home.html"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  defaultValue="Email recebedido, sua mensagem serar respondidada em até 3 dias utéis."
                />
                <input type="hidden" name="_template" defaultValue="table" />
              </div>
   
            }
            </div>
        </div>
      </footer>
    )
}