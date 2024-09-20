import { Link } from "react-router-dom"
import Am from '../Css/animais.module.css';


export default function Animal({ link, id, image, nome, descricao }) {
    return(
      <Link to={link}
      style={{ textDecoration: "none", position: "relative" }}
      id={id}
    >
      
      <div
        className={`card mb-5 text-bg-dark text-left ${Am.caixa} `} 
               style={{ maxWidth: 1500, height: "auto", width: 1500 }}
      
      >
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="Cade a imagem?? ;-;"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title ">
                <span className={`${Am.verde}`}>Doar</span>
                <span className={`${Am.branco}`}> para {nome}</span>
              </h3>
              <h4 className="card-text">
               {descricao}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
     
     



    )
  }