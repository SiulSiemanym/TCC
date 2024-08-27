import { Helmet } from "react-helmet";

export default function CatalogAnimal(){
    return(
        <>
        <Helmet><title>Catálogo Animais</title></Helmet>
        <header>
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary  mb-5"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="Home.html">
                <img src="Recursos/Imagens/Menu/Logo.png" id="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" id="navegacao" href="Home.html">
                      Início
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="navegacao" href="habitats.html">
                      Habitats
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="navegacao"
                      aria-current="page"
                      href="animal.html"
                    >
                      Animais
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="navegacao" href="sobre.html">
                      Sobre nós
                    </a>
                  </li>
                </ul>
                <span className="navbar-text">
                  <a href="login.html">
                    <img id="perfil" src="Recursos/Imagens/Menu/Perfil.png" />
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </header>
        <div className="background-image" />
        <div>
          <div id="barradepesquisa" className="mb-5 ">
            <input type="text" id="txtBusca" placeholder="Pesquisar animais..." />
            <img src="Recursos/Imagens/Animais/lupa.png" id="lupa" />
          </div>
          <div
            id="animal-list"
            className="d-flex justify-content-center flex-column align-items-center"
          >
            <a
              href="panda.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="panda"
            >
              <div
                className="card mb-5 text-bg-dark text-left "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/Bears_Pandas_Branches_531233_1920x1080.jpg"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para os Pandas</span>
                      </h3>
                      <h4 className="card-text">
                        {" "}
                        Você já imaginou o mundo sem a ternura dos pandas? Esses ursos
                        adoráveis, símbolos de conservação, precisam da nossa ajuda.
                        Cada contribuição faz a diferença, garantindo que programas de
                        preservação continuem protegendo seu habitat e fornecendo
                        cuidados essenciais. Junte-se a nós para assegurar um futuro
                        mais brilhante para os pandas e para nosso planeta. Sua doação
                        é a chave para preservar essa espécie icônica.{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="girafa.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="girafa"
            >
              <div
                className="card mb-5 text-bg-dark text-left mx-auto "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/Giraffes_513870_1920x1080.jpg"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para as Girafas</span>
                      </h3>
                      <h4 className="card-text">
                        {" "}
                        Imagine um mundo onde a majestosa girafa não mais percorre as
                        savanas africanas. Com sua graça e elegância únicas, esses
                        animais estão em perigo. Sua doação pode garantir que
                        programas de conservação continuem protegendo as girafas e seu
                        habitat. Cada contribuição conta, cada gesto importa. Juntos,
                        podemos estender nossos pescoços pela preservação dessas
                        criaturas magníficas.{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="araraazul.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="araraazul"
            >
              <div
                className="card mb-5 text-bg-dark text-left mx-auto "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/20231115_193423_0000-jpg.webp"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para as Araras Azuis</span>
                      </h3>
                      <h4 className="card-text">
                        {" "}
                        Junte-se a nós na missão de preservar as magníficas Araras
                        Azuis! Com sua generosidade, podemos garantir a proteção
                        dessas aves majestosas e seu habitat natural. Cada
                        contribuição faz a diferença, trazendo esperança e
                        oportunidade para um futuro onde as Araras Azuis continuem a
                        voar livres. Faça sua doação hoje e seja parte ativa na
                        conservação dessa espécie única.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="rinocerontebranco.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="rinocerontesbrancos"
            >
              <div
                className="card mb-5 text-bg-dark text-left mx-auto "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/rinoceronteeduardo.jpg"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para os Rinocerontes Brancos</span>
                      </h3>
                      <h4 className="card-text">
                        {" "}
                        Juntos, podemos fazer a diferença na proteção dos majestosos
                        Rinocerontes Brancos. Sua doação é fundamental para garantir
                        que essas criaturas incríveis continuem a prosperar em seu
                        habitat natural. Cada contribuição nos aproxima de um futuro
                        onde as gerações futuras possam testemunhar a beleza e a força
                        desses animais. Faça parte desta causa vital e apoie a
                        preservação dos Rinocerontes Brancos hoje mesmo.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="onçaspintadas"
            >
              <div
                className="card mb-5 text-bg-dark text-left mx-auto "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/onçapintada.jpg"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para Onças-Pintadas</span>
                      </h3>
                      <h4 className="card-text">
                        Ajude a proteger as majestosas Onças Pintadas e seu
                        ecossistema único! Sua doação é crucial para preservar esses
                        magníficos felinos e garantir que continuem a reinar nas
                        florestas. Cada contribuição é um passo importante em direção
                        a um mundo onde as Onças Pintadas possam prosperar livremente.
                        Junte-se a nós nesta missão vital e faça a diferença hoje.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="pinguinsafricanos"
            >
              <div
                className="card mb-5 text-bg-dark text-left mx-auto "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/PinguiAfricano.jpg"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para Pinguins Africanos</span>
                      </h3>
                      <h4 className="card-text">
                        Ajude a proteger os adoráveis Pinguins Africanos e seu lar no
                        gelado continente. Sua doação é essencial para preservar essas
                        aves encantadoras e garantir um futuro seguro para elas. Cada
                        contribuição nos aproxima de um mundo onde os Pinguins
                        Africanos continuam a mergulhar, brincar e prosperar em suas
                        colônias costeiras. Faça parte desta causa importante e faça
                        sua doação hoje mesmo.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#.html"
              style={{ textDecoration: "none", position: "relative" }}
              id="loboguará"
            >
              <div
                className="card mb-5 text-bg-dark text-left mx-auto "
                style={{ maxWidth: 1500, height: "auto" }}
                id="caixa"
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src="Recursos/Imagens/Animais/loboguará.jpg"
                      className="img-fluid rounded-start"
                      alt="Cade a imagem?? ;-;"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">
                        <span id="verde">Doar</span>
                        <span id="branco"> para Lobos Guará</span>
                      </h3>
                      <h4 className="card-text">
                        Apoie a preservação dos encantadores Lobos Guará! Sua doação é
                        fundamental para proteger esses magníficos animais e seu
                        ecossistema único. Cada contribuição ajuda a garantir um
                        futuro seguro para os Lobos Guará, permitindo que eles
                        continuem a vagar livremente por suas terras. Faça parte desta
                        causa crucial e faça sua doação hoje para ajudar a garantir a
                        sobrevivência dos Lobos Guará.
                      </h4>
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
                               */}
          </div>
        </div>
        
      </>
        
    )
}