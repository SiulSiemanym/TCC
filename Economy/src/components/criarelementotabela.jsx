export default function Animal({ id, image, nome, descricao }) {
    return(
      <a
      href="#.html"
      style={{ textDecoration: "none", position: "relative" }}
      id={id}
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
                <span id="branco"> para {nome}</span>
              </h3>
              <h4 className="card-text">
               {descricao}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </a>
    
    )
  }