import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Habitat(){
return(
        
            <div>
              <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary  mb-5" data-bs-theme="dark">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="Home.html"><img src="Recursos/Imagens/Menu/Logo.png" id="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link" id="navegacao" href="Home.html">Início</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" id="navegacao" aria-current="page" href="habitats.html">Habitats</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " id="navegacao" href="animal.html">Animais</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="navegacao" href="sobre.html">Sobre nós</a>
                        </li>
                      </ul>
                      <span className="navbar-text">
                        <a href="login.html"><img id="perfil" src="Recursos/Imagens/Menu/Perfil.png" /></a>
                      </span>
                    </div>
                  </div>
                </nav>
              </header>
              <div className="background-image" />
              <div> 
                <div id="barradepesquisa" className="mb-5 ">
                  <input type="text" id="txtBusca" placeholder="Pesquisar habitats..." />
                  <img src="Recursos/Imagens/Animais/lupa.png" id="lupa" />
                </div>
                <div id="habitats-list" className="d-flex justify-content-center flex-column align-items-center">
                  <a href="Amazonia.html" style={{textDecoration: 'none', position: 'relative'}} id="Amazonica">
                    <div className="card mb-5 text-bg-dark text-left mx-auto " style={{maxWidth: '1500px', height: 'auto'}} id="caixa">
                      <div className="row g-0">
                        <div className="col-md-4 ">
                          <img src="Recursos/Imagens/Habitats/Amazonia.avif" className="img-fluid rounded-start" alt="Cade a imagem?? ;-;" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h3 className="card-title "><span id="verde">Doar</span><span id="branco"> para a Floresta Amazônica</span></h3>
                            <h4 className="card-text"> O pulmão do mundo está em perigo! Ajude a proteger as florestas amazônicas, lar de inúmeras espécies e crucial para o equilíbrio climático global. Sua doação faz a diferença: mantenha a Amazônia viva e pulsante para as gerações futuras. Juntos, podemos preservar esse tesouro natural único. Contribua agora!</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div id="animal-list">
                    <a href="recifes.html" style={{textDecoration: 'none', position: 'relative'}} id="recife">
                      <div className="card mb-5 text-bg-dark text-left mx-auto " style={{maxWidth: '1500px', height: 'auto'}} id="caixa">
                        <div className="row g-0">
                          <div className="col-md-4 ">
                            <img src="Recursos/Imagens/Habitats/corais.avif" className="img-fluid rounded-start" alt="Cade a imagem?? ;-;" />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h3 className="card-title "><span id="verde">Doar</span><span id="branco"> para os Recifes de Corais</span></h3>
                              <h5 className="card-text">Os recifes de corais são como cidades subaquáticas, abrigando uma vasta gama de vida marinha e protegendo as costas da erosão. No entanto, esses ecossistemas vitais estão sob crescente ameaça devido à atividade humana. Ao doar para a preservação dos recifes de corais, você está investindo na saúde dos oceanos e na sustentabilidade de inúmeras espécies marinhas. Sua contribuição pode financiar projetos de conservação, pesquisa e educação que são essenciais para proteger esses preciosos habitats marinhos. Junte-se a nós na missão de salvar os recifes de corais e garantir um futuro sustentável para os oceanos e para nós mesmos. Doe hoje e faça a diferença!                  </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div id="animal-list">
                      <a href="manguezal.html" style={{textDecoration: 'none', position: 'relative'}} id="mangue">
                        <div className="card mb-5 text-bg-dark text-left mx-auto " style={{maxWidth: '1500px', height: 'auto'}} id="caixa">
                          <div className="row g-0">
                            <div className="col-md-4 ">
                              <img src="Recursos/Imagens/Habitats/mangue-vermelho-3.jpeg" className="img-fluid rounded-start" alt="Cade a imagem?? ;-;" />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h3 className="card-title "><span id="verde">Doar</span><span id="branco"> para os Manguezais</span></h3>
                                <h4 className="card-text">Os manguezais são essenciais para a vida marinha e a proteção costeira. Eles abrigam diversas espécies, ajudam na pesca e combatem as mudanças climáticas capturando carbono. No entanto, estão ameaçados por desmatamento e poluição. Doar para organizações que preservam manguezais é crucial. Sua contribuição apoia projetos de recuperação e educação ambiental. Ao doar, você protege a biodiversidade e fortalece as comunidades costeiras. Faça a diferença hoje e ajude a salvar os manguezais!
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div id="animal-list">
                        <a href="savana.html" style={{textDecoration: 'none', position: 'relative'}} id="Savana">
                          <div className="card mb-5 text-bg-dark text-left mx-auto " style={{maxWidth: '1500px', height: 'auto'}} id="caixa">
                            <div className="row g-0">
                              <div className="col-md-4 ">
                                <img src="Recursos/Imagens/Habitats/savana.avif" className="img-fluid rounded-start" alt="Cade a imagem?? ;-;" />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h3 className="card-title "><span id="verde">Doar</span><span id="branco"> para a Savana</span></h3>
                                  <h4 className="card-text">A savana é um ecossistema vital, lar de animais como leões e elefantes, e crucial para o equilíbrio ambiental. No entanto, enfrenta ameaças como desmatamento e mudanças climáticas. Doar para organizações de conservação é essencial para proteger a savana. Sua contribuição apoia projetos de preservação e educação ambiental. Ajude a salvar a savana e garantir um futuro sustentável para a vida selvagem e as comunidades locais. Doe hoje!</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div id="animal-list">
                          <a href="atlantica.html" style={{textDecoration: 'none', position: 'relative'}} id="Atlantica">
                            <div className="card mb-5 text-bg-dark text-left mx-auto " style={{maxWidth: '1500px', height: 'auto'}} id="caixa">
                              <div className="row g-0">
                                <div className="col-md-4 ">
                                  <img src="Recursos/Imagens/Habitats/atlantica.avif" className="img-fluid rounded-start" alt="Cade a imagem?? ;-;" />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h3 className="card-title "><span id="verde">Doar</span><span id="branco"> para a Mata Atlântica</span></h3>
                                    <h4 className="card-text">A Mata Atlântica é vital para o clima, a água e a biodiversidade, abrigando muitas espécies únicas. No entanto, sofre com o desmatamento e a urbanização.
                                      Doar para organizações de conservação é crucial. Sua contribuição apoia a restauração de áreas degradadas, a proteção da fauna e flora e a educação ambiental.
                                      Ajude a preservar a Mata Atlântica e garanta um futuro sustentável. Doe hoje! </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                          {/*     Copiar e colar isso para criar novos quadrados de animais               
                            <a href="#.html" style="text-decoration:none; position: relative;" >
                              <div class="card mb-5 text-bg-dark text-left mx-auto " style="max-width: 1500px; height:auto;"  id="caixa">
                                 <div class="row g-0">
                                  <div class="col-md-4 ">
                                    <img src="imgdoanimal" class="img-fluid rounded-start" alt="Cade a imagem?? ;-;">
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <h3 class="card-title "><span id="verde">Doar</span><span id="branco"> para Animal</span></h3>
                                      <h4 class="card-text">Texto do animal </h4>
                                    </div>
                                    </div>
                                    </div>
                                  </a>
                              
                                     */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
     